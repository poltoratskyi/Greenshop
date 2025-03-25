"use client";

import { FieldError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";
import CustomInput from "../common-form-elements/custom-input ";
import { useZipCode } from "../../../hooks";
import Button from "../button";
import Style from "./auto-complete-input.module.scss";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useZipCodeStore } from "../../../store";

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
    useZipCode(setValue, value, name);

  useClickAway(ref, () => {
    resetZipData();
  });

  return (
    <div ref={ref} className={Style.wrapper}>
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
        <div className={Style.result}>
          <div className={Style.address}>
            {`Location details: `}
            <span className={Style.info}>
              {[
                zipData?.country,
                zipData?.["country abbreviation"],
                zipData?.places[0]?.["place name"],
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>

          <Button
            type="button"
            onClick={handleChangeResult}
            className="choose"
            value="Choose"
          />
        </div>
      )}
    </div>
  );
};

export default ZipCodeInput;
