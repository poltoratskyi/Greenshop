"use client";

import { FieldError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CheckoutFormFields } from "../../../../schemas/checkout-form-schema";
import CustomInput from "../../common-form-elements/custom-input/custom-input ";
import { useZipCodeCheckout } from "../../../../hooks";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useZipCodeStore } from "../../../../store";
import { Container, ZipCode } from "../../location-details";

interface Props {
  id: string;
  name: keyof CheckoutFormFields;
  placeholder: string;
  type: string;
  error?: FieldError;
  isLoading: boolean;

  watch: UseFormWatch<CheckoutFormFields>;
  setValue: UseFormSetValue<CheckoutFormFields>;
}

const ZipCodeInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,
  error,
  isLoading,

  watch,
  setValue,
}) => {
  const value = watch(name);
  const ref = useRef<HTMLDivElement>(null);
  const resetZipData = useZipCodeStore((state) => state.resetZipData);

  const { zipData, errorRequest, searchInputCode, handleChangeResult } =
    useZipCodeCheckout(setValue, value, name);

  useClickAway(ref, () => {
    resetZipData();
  });

  return (
    <Container ref={ref}>
      <CustomInput
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        errorRequest={errorRequest}
        isLoading={isLoading}
        onChangeHandler={searchInputCode}
        error={error}
      />

      {zipData && (
        <ZipCode zipData={zipData} handleChangeResult={handleChangeResult} />
      )}
    </Container>
  );
};

export default ZipCodeInput;
