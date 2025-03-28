"use client";

import { useDebounce } from "react-use";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutFormFields } from "../schemas/checkout-form-schema";
import { useUIStore } from "../store";
import { useRef } from "react";

export const useAutocompleteCheckout = (
  value: string | undefined,
  name: keyof CheckoutFormFields,

  setValue: UseFormSetValue<CheckoutFormFields>,
  fetchLocation: (value: string, name: keyof CheckoutFormFields) => void
) => {
  const isAutocompleteOpen = useUIStore((state) => state.isAutocompleteOpen);
  const setIsAutocompleteOpen = useUIStore(
    (state) => state.setIsAutocompleteOpen
  );

  const initialValue = useRef(value);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trimStart();

    setIsAutocompleteOpen(true);
    setValue(name, newValue, {
      shouldValidate: true,
      shouldDirty: newValue !== initialValue.current,
    });
  };

  useDebounce(
    () => {
      if (
        value &&
        value.length >= 2 &&
        isAutocompleteOpen &&
        value !== initialValue.current
      ) {
        fetchLocation(value, name);
      }
      initialValue.current = value;
    },
    500,
    [value]
  );

  return { searchHandler };
};
