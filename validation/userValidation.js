import z from 'zod';

export const userRegisterSchema = z.object({
    name : z.string().min(1,{message : "Minimum 1 character required"}),
    email : z.string().email({message : "Email is required"}),
    password : z.string().min(4,{message : "Minimum 4 charater is required"})
});

export const userAuthValidation = z.object({
    email : z.string().email({message : 'Email is required'}),
    password : z.string().min(4,{message : "minimum 4 characters is required"})
})