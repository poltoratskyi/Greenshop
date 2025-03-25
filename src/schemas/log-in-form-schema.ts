import zod from "zod";

const errorMessage = "Field is required";

export const logInFormSchema = zod.object({
  email: zod
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(2, { message: errorMessage })
    .max(100, { message: "Email should not exceed 100 characters" }),

  password: zod
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password should not exceed 128 characters" }),
});

export type LogInFormFields = zod.infer<typeof logInFormSchema>;
