import { PrismaClient } from '@prisma/client'
import generateToken from '../utils/generateTokenUser.js';
import bcrypt from 'bcrypt'
import { userAuthValidation, userRegisterSchema } from '../validation/userValidation.js';

const prisma = new PrismaClient()


const registerUser = async(req,res) =>{
    try {
        const {error,data} = userRegisterSchema.safeParse(req.body);

        if(error){
           return res.status(404).json(error.issues[0].message)
        }
        const {name, email, password} = data

        const userExist = await prisma.user.findFirst({
            where : {
                email : email
            }
        })
    
        if(userExist){
          return res.status(400).json('User already exisit');
        }
    
        // Bcrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await prisma.user.create({
            data : {
                name,email,password : hashedPassword,
                roll : "viewer"
            }
        })
    
        if(user){
            generateToken(res,user.id)
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email
            })
        }else{
           return res.status(400).json('invalid user data')
        }
    } catch (error) {
        console.log(error);
       return  res.status(500).json("Internal server error")
    }
}


const authUser = async(req,res) =>{
    try {
        const {error, data} = userAuthValidation.safeParse(req.body);

        if(error){
           return res.status(404).json(error.issues[0].message)
        }
        const { email, password} = data;

        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).json('User not found');
        }

        // Check if the hashed password matches the provided password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json('Invalid password');
        }

        // Password is correct, generate token and send response
        generateToken(res, user.id);
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email
        });

    } catch (error) {
        console.log(error);
        return  res.status(500).json("Internal server error")
    }
}


const logoutUser = async(req,res) =>{
    try {
        res.cookie('userJwt','',{
            httpOnly:true,
            expires:new Date(0)
        })
        res.status(200).json({message:"User Logged out"})
    } catch (error) {
        console.log(error);
        return  res.status(500).json("Internal server error")
    }
}

const getIotDatas = async (req, res) => {
    try {
        const twoDigitNumber = await prisma.twoDigitNumber.findMany({});
        const threeDigitNumber = await prisma.threeDigitNumber.findMany({});
        const fourDigitNumber = await prisma.fourDigitNumber.findMany({});
        const fourDigitLetter = await prisma.fourDigitLetter.findMany({});
        const twoDigitLetter = await prisma.twoDigitLetter.findMany({});

        
        
        const formattedData = {
            twoDigitNumber,
            threeDigitNumber,
            fourDigitNumber,
            fourDigitLetter,
            twoDigitLetter
        };

        

        return res.status(200).json(formattedData);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error");
    }
}
export {
    registerUser,
    authUser,
    logoutUser,
    getIotDatas
}

