import { Prisma, PrismaClient } from '@prisma/client'
import generateToken from '../utils/generateTokenUser.js';
import bcrypt from 'bcrypt'
import { adminAuthValidation, adminRegisterSchema } from '../validation/adminValidation.js';
import generateTokenAdmin from '../utils/generateTokenAdmin.js';

const prisma = new PrismaClient()

const registerAdmin = async(req,res) =>{
    try {
        const {error,data} = adminRegisterSchema.safeParse(req.body);

        if(error){
            return res.status(404).json(error.issues[0].message)
        }
        const {name,email,password,key} = data;

        const adminExist = await prisma.admin.findFirst({
            where : {
                email : email
            }
        });

        if(adminExist){
           return res.status(400).json('admin already exist')
        }

        if(key!== process.env.ADMIN_KEY){
           return res.status(401).json("Invalid key")
        };

        // Bcrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await prisma.admin.create({
            data : {
                name,
                email,
                password : hashedPassword
            }
        })

        if(admin){
            generateTokenAdmin(res,admin.id)
            res.status(201).json({
                id:admin.id,
                name:admin.name,
                email:admin.email
            })
        }else{
          return  res.status(400).json("Invalid admin data")
        }


    } catch (error) {
        console.log(error);
        return  res.status(500).json("Internal server error")
    }
}

const authAdmin = async(req,res) =>{
    try {   
        const {error, data} = adminAuthValidation.safeParse(req.body);

        if(error){
           return res.status(404).json(error.issues[0].message)
        }
        const { email, password} = data;

        const admin = await prisma.admin.findFirst({
            where: {
                email: email
            }
        });

        if (!admin) {
            return res.status(404).json('Admin not found');
        }

        // Check if the hashed password matches the provided password
        const passwordMatch = await bcrypt.compare(password, admin.password);

        if (!passwordMatch) {
            return res.status(400).json('Invalid password');
        }

        // Password is correct, generate token and send response
        generateTokenAdmin(res, admin.id);
        res.status(200).json({
            id: admin.id,
            name: admin.name,
            email: admin.email
        });
    } catch (error) {
        console.log(error);
        return  res.status(500).json("Internal server error")
    }
}

const logoutAdmin = async(req,res) =>{
    try {
        res.cookie('adminJwt','',{
            httpOnly:true,
            expires:new Date(0)
        })
        res.status(200).json({message:"AdminLogged out"})
    } catch (error) {
        console.log(error);
        return  res.status(500).json("Internal server error")
    }
}


export {
    registerAdmin,
    authAdmin,
    logoutAdmin
}