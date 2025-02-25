"use client";

import { useDebounce } from "react-use";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutFormFields } from "../schemas/checkout-form-schema";
import { useUIStore } from "../store";

export const useAutoCompleteInput = (
  value: string | undefined,
  name: keyof CheckoutFormFields,

  setValue: UseFormSetValue<CheckoutFormFields>,
  fetchLocation: (value: string, name: keyof CheckoutFormFields) => void
) => {
  const isAutoCompleteOpen = useUIStore((state) => state.isAutoCompleteOpen);
  const setIsAutoCompleteOpen = useUIStore(
    (state) => state.setIsAutoCompleteOpen
  );

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();

    setIsAutoCompleteOpen(true);
    setValue(name, value, { shouldValidate: true });
  };

  useDebounce(
    () => {
      if (value && value.length >= 2 && isAutoCompleteOpen) {
        fetchLocation(value, name);
      }
    },
    500,
    [value]
  );

  return { searchHandler };
};
