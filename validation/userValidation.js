import z from 'zod';

export const userRegisterSchema = z.object({
    name: z.string().min(1, { message: "Name must be at least 1 character" }),
    email: z.string().email({ message: "Please provide a valid email address" }),
    password: z.string().min(4, { message: "Password must be at least 4 characters long" })
});

export const userAuthValidation = z.object({
    email: z.string().email({ message: 'Please provide a valid email address' }),
    password: z.string().min(4, { message: "Password must be at least 4 characters long" })
});

export const userUpdationValidation = z.object({
    userId : z.number(),
    name: z.string().min(4, { message: "Password must be at least 4 characters long" }).optional()
});
