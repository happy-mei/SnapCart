import { z } from "zod";

export const registerSchema = z.object({
  name: z.string()
    .min(2, "Name is required")
    .max(50, "Name must be at most 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  email: z.email("Invalid email"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .regex(/[A-Za-z]/, "Must contain a letter")
    .regex(/[0-9]/, "Must contain a number"),
  confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

// export const formSchema = z.discriminatedUnion("mode", [
//   loginSchema,
//   registerSchema,
// ]);

// export type FormSchema = z.infer<typeof formSchema>;

// export type FormSchema = z.infer<typeof loginSchema> | z.infer<typeof registerSchema>;
