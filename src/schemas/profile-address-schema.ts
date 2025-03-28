import zod from "zod";

const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

const errorMessage = "Field is required";

export const profileAddressFormSchema = zod.object({
  country: zod
    .string()
    .min(2, { message: errorMessage })
    .max(100, { message: "Country name should not exceed 100 characters" }),

  city: zod
    .string()
    .min(2, { message: errorMessage })
    .max(100, { message: "City name should not exceed 100 characters" }),

  address: zod
    .string()
    .min(2, { message: errorMessage })
    .max(200, { message: "Address should not exceed 200 characters" }),

  apartment: zod
    .string()
    .max(100, { message: "Apartment should not exceed 100 characters" })
    .refine((value) => value === "" || value.match(nameRegex), {
      message: "Please provide a valid apartment name",
    })
    .optional(),

  state: zod
    .string()
    .min(2, { message: errorMessage })
    .max(100, { message: "State should not exceed 100 characters" }),

  zip: zod
    .string()
    .refine((value) => value === "" || value.match(zipCodeRegex), {
      message: "Please provide a valid zip code. For example: 20500",
    })
    .optional(),
});

export type ProfileAddressFormFields = zod.infer<
  typeof profileAddressFormSchema
>;
