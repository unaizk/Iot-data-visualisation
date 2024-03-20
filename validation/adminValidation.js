import z from 'zod';

export const adminRegisterSchema = z.object({
    name : z.string().min(1,{message : "Minimum 1 character required"}),
    email : z.string().email({message : "Email is required"}),
    password : z.string().min(4,{message : "password required 4 character"}),
    key : z.string().min(1,{message :"key required"})
});

export const adminAuthValidation = z.object({
    email : z.string().email({message : 'Email is required'}),
    password : z.string().min(4,{message : "minimum 4 characters is required"})
})