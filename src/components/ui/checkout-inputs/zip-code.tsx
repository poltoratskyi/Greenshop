"use client";

import { UseFormSetValue } from "react-hook-form";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";
import CustomInput from "../common-form-elements/custom-input ";
import { useZipCode } from "../../../hooks";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  type: string;

  setValue: UseFormSetValue<CheckoutFormFields>;
}

const ZipCodeInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,

  setValue,
}) => {
  const { zipCode, errorRequest, searchZipCode } = useZipCode(setValue);

  return (
    <CustomInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={zipCode}
      errorRequest={errorRequest}
      onChangeHandler={searchZipCode}
    />
  );
};

export default ZipCodeInput;
