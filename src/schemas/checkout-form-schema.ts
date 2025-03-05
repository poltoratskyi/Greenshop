import zod from "zod";

const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

const errorMessage = "Field is required";

export const checkoutFormSchema = zod.object({
  firstName: zod
    .string()
    .min(1, { message: errorMessage })
    .max(50, { message: "First name should not exceed 50 characters" })
    .refine((value) => value.match(nameRegex), {
      message: "First name can only contain letters, spaces, and hyphens.",
    }),

  lastName: zod
    .string()
    .min(1, { message: errorMessage })
    .max(50, { message: "Last name should not exceed 50 characters" })
    .refine((value) => value.match(nameRegex), {
      message: "Last name can only contain letters, spaces, and hyphens.",
    }),

  country: zod
    .string()
    .min(1, { message: errorMessage })
    .max(100, { message: "Country name should not exceed 100 characters" }),

  city: zod
    .string()
    .min(1, { message: errorMessage })
    .max(100, { message: "City name should not exceed 100 characters" }),

  email: zod
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: errorMessage })
    .max(100, { message: "Email should not exceed 100 characters" }),

  phone: zod
    .string()
    .min(10, { message: "Phone number should have at least 10 digits" })
    .max(15, { message: "Phone number should not exceed 15 digits" }),

  address: zod
    .string()
    .min(1, { message: errorMessage })
    .max(200, { message: "Address should not exceed 200 characters" }),

  apartment: zod
    .string()
    .max(100, { message: "Apartment should not exceed 100 characters" })
    .refine((value) => value === "" || value.match(nameRegex), {
      message: "Please provide a valid apartment name.",
    })
    .optional(),

  state: zod
    .string()
    .min(1, { message: errorMessage })
    .max(100, { message: "State should not exceed 100 characters" }),

  zip: zod
    .string()
    .refine((value) => value === "" || value.match(zipCodeRegex), {
      message: "Please provide a valid zip code. For example: 20500",
    })
    .optional(),

  notes: zod
    .string()
    .max(300, { message: "Message should not exceed 300 characters" })
    .optional(),
});

export type CheckoutFormFields = zod.infer<typeof checkoutFormSchema>;
