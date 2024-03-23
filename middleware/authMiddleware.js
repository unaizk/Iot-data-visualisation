import jwt from 'jsonwebtoken';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const protect = async(req,res,next)=>{
    let token = req.cookies.userJwt;

    if(token){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await prisma.user.findFirst({
                where :{
                    id : decoded.userId
                }
            })
            next();
        } catch (error) {
            return res.status(401).json('Not authorized, invalid token')
        }
    }else{
       return res.status(401).json('Not authorized,no token')
    }
}

export {protect}