import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(2),
});

export const signUpSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Invalid email",
    })
    .max(50)
    .email(),
  password: z.string().min(2, {
    message: "Invalid password",
  }),
  confirmPassword: z.string({ message: "Invalid password" }).min(2),
});
