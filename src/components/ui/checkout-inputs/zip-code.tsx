"use client";

import { FieldError, UseFormSetValue } from "react-hook-form";
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
  name: string;
  placeholder: string;
  type: string;
  error?: FieldError;

  setValue: UseFormSetValue<CheckoutFormFields>;
}

const ZipCodeInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,
  error,

  setValue,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const resetZipData = useZipCodeStore((state) => state.resetZipData);
  const resetZipCode = useZipCodeStore((state) => state.resetZipCode);

  const {
    zipData,
    zipCode,
    errorRequest,
    searchInputCode,
    handleChangeResult,
  } = useZipCode(setValue);

  useClickAway(ref, () => {
    resetZipData();
    resetZipCode();
  });

  return (
    <div ref={ref} className={Style.wrapper}>
      <CustomInput
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={zipCode}
        errorRequest={errorRequest}
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
            choose
            handleChangeResult={handleChangeResult}
            className="choose"
            value="Choose"
          />
        </div>
      )}
    </div>
  );
};

export default ZipCodeInput;
