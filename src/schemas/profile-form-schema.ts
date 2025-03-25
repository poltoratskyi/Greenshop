import zod from "zod";

const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/;

const errorMessage = "Field is required";

export const profileFormSchema = zod
  .object({
    firstName: zod
      .string()
      .min(2, { message: errorMessage })
      .max(50, { message: "First name should not exceed 50 characters" })
      .refine((value) => value.match(nameRegex), {
        message: "First name can only contain letters, spaces, and hyphens",
      }),

    lastName: zod
      .string()
      .min(2, { message: errorMessage })
      .max(50, { message: "Last name should not exceed 50 characters" })
      .refine((value) => value.match(nameRegex), {
        message: "Last name can only contain letters, spaces, and hyphens",
      }),

    email: zod
      .string()
      .email({ message: "Please enter a valid email address" })
      .min(2, { message: errorMessage })
      .max(100, { message: "Email should not exceed 100 characters" }),

    phone: zod.string().optional(),

    newPassword: zod
      .string()
      .max(128, { message: "Password should not exceed 128 characters" })
      .refine((value) => {
        if (!value) return true;

        if (value.length < 8) {
          return false;
        }

        return (
          value.match(passwordRegex),
          {
            message:
              "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character",
          }
        );
      })
      .optional(),

    repeatPassword: zod.string(),
  })

  .refine((data) => data.newPassword === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export type ProfileFormFields = zod.infer<typeof profileFormSchema>;
