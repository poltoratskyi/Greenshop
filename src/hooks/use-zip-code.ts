"use client";

import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CheckoutFormFields } from "../schemas/checkout-form-schema";
import { useZipCodeStore } from "../store/zip-code";
import { useDebounce } from "react-use";

export const useZipCode = (setValue: UseFormSetValue<CheckoutFormFields>) => {
  const zipCode = useZipCodeStore((state) => state.zipCode);
  const zipData = useZipCodeStore((state) => state.zipData);
  const errorRequest = useZipCodeStore((state) => state.error);
  const setZipCode = useZipCodeStore((state) => state.setZipCode);
  const loadZipData = useZipCodeStore((state) => state.loadZipData);

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
      }
    },
    350,
    [zipCode]
  );

  useEffect(() => {
    if (zipData) {
      setValue("country", zipData.country || "", { shouldValidate: true });
      setValue("city", zipData?.places[0]?.["place name"] || "", {
        shouldValidate: true,
      });
      setValue("state", zipData?.places[0]?.state || "", {
        shouldValidate: true,
      });
      setValue("zip", zipCode || "", { shouldValidate: true });
    }
  }, [zipData, zipCode, setValue]);

  return { zipCode, errorRequest, searchZipCode };
};
