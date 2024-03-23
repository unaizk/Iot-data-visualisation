import jwt from 'jsonwebtoken';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const adminProtect = async(req,res,next)=>{
    let token = req.cookies.adminJwt;

    if(token){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decoded,'helooo decoded');
            req.admin = await prisma.admin.findFirst({
                where: {
                    id : decoded.adminId
                }
            })
            next();
        } catch (error) {
           return  res.status(401).json('Not authorized, invalid token')
        }
    }else{
       return res.status(401).json('Not authorized,no token')
    }
}

export {adminProtect}