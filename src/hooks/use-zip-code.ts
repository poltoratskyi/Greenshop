"use client";

import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutFormFields } from "../schemas/checkout-form-schema";
import { useZipCodeStore } from "../store/zip-code";
import { useDebounce } from "react-use";
import { useUIStore } from "../store";

export const useZipCode = (setValue: UseFormSetValue<CheckoutFormFields>) => {
  const zipCode = useZipCodeStore((state) => state.zipCode);
  const zipData = useZipCodeStore((state) => state.zipData);
  const errorRequest = useZipCodeStore((state) => state.error);
  const setZipCode = useZipCodeStore((state) => state.setZipCode);
  const loadZipData = useZipCodeStore((state) => state.loadZipData);

  const setIsAutoCompleteOpen = useUIStore(
    (state) => state.setIsAutoCompleteOpen
  );

  const searchZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    if (value.length <= 5) {
      setZipCode(value);
    }
  };

  useDebounce(
    () => {
      if (zipCode.length === 5) {
        loadZipData(zipCode);
        setIsAutoCompleteOpen(false);
      }
    },
    500,
    [zipCode]
  );

  useEffect(() => {
    if (zipData) {
      setValue("country", zipData.country, { shouldValidate: true });
      setValue("city", zipData?.places[0]?.["place name"], {
        shouldValidate: true,
      });
      setValue("state", zipData?.places[0]?.state, {
        shouldValidate: true,
      });
      setValue("zip", zipCode, { shouldValidate: true });
    }

    if (zipCode.length < 5) {
      setValue("country", "");
      setValue("city", "");
      setValue("state", "");
      setValue("zip", "");
    }
  }, [zipData, zipCode, setValue]);

  return { zipCode, errorRequest, searchZipCode };
};
