"use client";

import { UseFormSetValue } from "react-hook-form";
import { ProfileAddressFormFields } from "../schemas";
import { useZipCodeStore } from "../store/zip-code";
import { useDebounce } from "react-use";
import { useUIStore } from "../store";

export const useZipCodeProfileAddress = (
  setValue: UseFormSetValue<ProfileAddressFormFields>,
  value: string | undefined,
  name: keyof ProfileAddressFormFields
) => {
  const zipData = useZipCodeStore((state) => state.zipData);
  const errorRequest = useZipCodeStore((state) => state.error);

  const resetZipData = useZipCodeStore((state) => state.resetZipData);
  const loadZipData = useZipCodeStore((state) => state.loadZipData);

  const setIsAutocompleteOpen = useUIStore(
    (state) => state.setIsAutocompleteOpen
  );

  const searchInputCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    if (value.length <= 5) {
      setValue(name, value, { shouldValidate: true });
    }
  };

  useDebounce(
    () => {
      if (value && value.length === 5) {
        loadZipData(value);
        setIsAutocompleteOpen(false);
      }
    },
    500,
    [value]
  );

  const handleChangeResult = () => {
    if (zipData) {
      setValue("country", zipData.country, { shouldValidate: true });

      setValue("city", zipData?.places[0]?.["place name"], {
        shouldValidate: true,
      });

      setValue("state", zipData?.places[0]?.state, {
        shouldValidate: true,
      });

      setValue("zip", value, { shouldValidate: true });

      resetZipData();
    }
  };

  return {
    zipData,
    errorRequest,

    searchInputCode,
    handleChangeResult,
  };
};
