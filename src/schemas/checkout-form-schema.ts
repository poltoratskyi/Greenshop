import zod from "zod";

const errorMessageMinLength = "Field is required";

export const checkoutFormSchema = zod.object({
  firstName: zod
    .string()
    .min(1, { message: `${errorMessageMinLength}` })
    .max(50, { message: "First name should not exceed 50 characters" }),

  lastName: zod
    .string()
    .min(1, { message: `${errorMessageMinLength}` })
    .max(50, { message: "Last name should not exceed 50 characters" }),

  city: zod
    .string()
    .min(1, { message: `${errorMessageMinLength}` })
    .max(100, { message: "City name should not exceed 100 characters" }),

  email: zod
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: `${errorMessageMinLength}` })
    .max(100, { message: "Email should not exceed 100 characters" }),

  phone: zod
    .string()
    .min(10, { message: "Phone number should have at least 10 digits" })
    .max(15, { message: "Phone number should not exceed 15 digits" }),

  address: zod
    .string()
    .min(1, { message: `${errorMessageMinLength}` })
    .max(200, { message: "Address should not exceed 200 characters" }),

  zip: zod
    .string()
    .min(5, { message: "Zip code should have at least 5 digits" })
    .max(10, { message: "Zip code should not exceed 10 digits" }),

  country: zod
    .string()
    .min(1, { message: `${errorMessageMinLength}` })
    .max(100, { message: "Country name should not exceed 100 characters" }),

  message: zod.string().optional(),
});

export type CheckoutFormFields = zod.infer<typeof checkoutFormSchema>;
