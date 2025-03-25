import zod from "zod";

const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/;

const errorMessage = "Field is required";

export const signUpFormSchema = zod
  .object({
    firstName: zod
      .string()
      .min(2, { message: errorMessage })
      .max(50, { message: "First name should not exceed 50 characters" })
      .refine((value) => value.match(nameRegex), {
        message: "First name can only contain letters, spaces, and hyphens",
      }),

    email: zod
      .string()
      .email({ message: "Please enter a valid email address" })
      .min(2, { message: errorMessage })
      .max(100, { message: "Email should not exceed 100 characters" }),

    password: zod
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(128, { message: "Password should not exceed 128 characters" })
      .refine((value) => value.match(passwordRegex), {
        message:
          "Password must contain at least one uppercase letter, one number, and one special character",
      }),

    repeatPassword: zod.string(),
  })

  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export type SignUpFormFields = zod.infer<typeof signUpFormSchema>;
