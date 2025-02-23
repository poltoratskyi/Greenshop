"use client";

import { useLocationStore } from "../../../store";
import { CustomInput } from "../common-form-elements";
import { CheckoutFormFields } from "../../../schemas";
import { FieldError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useAutoCompleteInput } from "../../../hooks";

interface Props {
  id: string;
  name: keyof CheckoutFormFields;
  placeholder: string;
  type: string;
  error?: FieldError;

  fetchLocation: (query: string, type: string) => Promise<void>;
  setValue: UseFormSetValue<CheckoutFormFields>;
  watch: UseFormWatch<CheckoutFormFields>;
}

const AutoCompleteInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,
  error,

  fetchLocation,
  setValue,
  watch,
}) => {
  const value = watch(name);

  const errorRequest = useLocationStore((state) => state.error);

  const { searchHandler } = useAutoCompleteInput(
    value,
    name,
    setValue,
    fetchLocation
  );

  return (
    <CustomInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      error={error}
      errorRequest={errorRequest}
      onChangeHandler={searchHandler}
    />
  );
};

export default AutoCompleteInput;
