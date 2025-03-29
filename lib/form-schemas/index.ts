import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(6, {
    message: "Invalid password, password must be at least 6 characters",
  }),
});

export const signUpSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Invalid email",
    })
    .max(50)
    .email(),
  password: z.string().min(6, {
    message: "Invalid password, password must be at least 6 characters",
  }),
  confirmPassword: z.string({ message: "Invalid password" }).min(2),
});
