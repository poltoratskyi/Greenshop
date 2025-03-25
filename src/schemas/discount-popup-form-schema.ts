import zod from "zod";

const errorMessage = "Field is required";

export const discountPopupFormSchema = zod.object({
  email: zod
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(2, { message: errorMessage })
    .max(100, { message: "Email should not exceed 100 characters" }),
});

export type DiscountPopupFormFields = zod.infer<typeof discountPopupFormSchema>;
