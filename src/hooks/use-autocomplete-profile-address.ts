import { useRef } from "react";
import { useDebounce } from "react-use";
import { UseFormSetValue } from "react-hook-form";
import { ProfileAddressFormFields } from "../schemas";
import { useUIStore } from "../store";

export const useAutocompleteProfileAddress = (
  value: string | undefined,
  name: keyof ProfileAddressFormFields,

  setValue: UseFormSetValue<ProfileAddressFormFields>,
  fetchLocation: (value: string, name: keyof ProfileAddressFormFields) => void
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
