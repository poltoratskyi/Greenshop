"use client";

import { useDebounce } from "react-use";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutFormFields } from "../schemas/checkout-form-schema";

export const useAutoCompleteInput = (
  value: string | undefined,
  name: keyof CheckoutFormFields,

  setValue: UseFormSetValue<CheckoutFormFields>,
  fetchLocation: (value: string, name: keyof CheckoutFormFields) => void
) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setValue(name, value, { shouldValidate: true });
  };

  useDebounce(
    () => {
      if (value && value.length >= 2) {
        fetchLocation(value, name);
      }
    },
    1000,
    [value]
  );

  return { searchHandler };
};
