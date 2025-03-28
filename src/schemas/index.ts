import { checkoutFormSchema } from "./checkout-form-schema";
import { CheckoutFormFields } from "../schemas/checkout-form-schema";

import { signUpFormSchema } from "./sign-up-form-schema";
import { SignUpFormFields } from "../schemas/sign-up-form-schema";

import { logInFormSchema } from "./log-in-form-schema";
import { LogInFormFields } from "./log-in-form-schema";

import { discountPopupFormSchema } from "./discount-popup-form-schema";
import { DiscountPopupFormFields } from "./discount-popup-form-schema";

import { profileAccountDetailsFormSchema } from "./profile-account-details-schema";
import { ProfileAccountDetailsFormFields } from "./profile-account-details-schema";

import { profileAddressFormSchema } from "./profile-address-schema";
import { ProfileAddressFormFields } from "./profile-address-schema";

export {
  checkoutFormSchema,
  signUpFormSchema,
  logInFormSchema,
  discountPopupFormSchema,
  profileAccountDetailsFormSchema,
  profileAddressFormSchema,
};

export type { CheckoutFormFields };
export type { SignUpFormFields };
export type { LogInFormFields };
export type { DiscountPopupFormFields };
export type { ProfileAccountDetailsFormFields };
export type { ProfileAddressFormFields };
