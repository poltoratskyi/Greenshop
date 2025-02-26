"use client";

import { useLocationStore, useUIStore } from "../../../store";
import { CustomInput } from "../common-form-elements";
import { CheckoutFormFields } from "../../../schemas";
import { FieldError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useAutoCompleteInput } from "../../../hooks";
import { NominatimLocation } from "../../../types";
import Style from "./auto-complete-input.module.scss";
import { useRef } from "react";
import { useClickAway } from "react-use";

interface Props {
  id: string;
  name: keyof CheckoutFormFields;
  placeholder: string;
  type: string;
  error?: FieldError;
  data: NominatimLocation[];
  isLoading?: boolean;

  fetchLocation: (query: string, type: string) => Promise<void>;
  setValue: UseFormSetValue<CheckoutFormFields>;
  watch: UseFormWatch<CheckoutFormFields>;
  resetData: () => void;
}

const AutoCompleteInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,
  error,
  data,
  isLoading,

  fetchLocation,
  setValue,
  watch,
  resetData,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const value = watch(name);

  const errorRequest = useLocationStore((state) => state.error);

  const setIsAutoCompleteOpen = useUIStore(
    (state) => state.setIsAutoCompleteOpen
  );

  const { searchHandler } = useAutoCompleteInput(
    value,
    name,
    setValue,
    fetchLocation
  );

  const handleSuggestionClick = (item: NominatimLocation) => {
    setIsAutoCompleteOpen(false);
    setValue(name, item.display_name);
    resetData();
  };

  useClickAway(ref, () => {
    resetData();
  });

  return (
    <div ref={ref} className={Style.wrapper}>
      <CustomInput
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        error={error}
        errorRequest={errorRequest}
        onChangeHandler={searchHandler}
        isLoading={isLoading}
      />

      {data.length > 0 && (
        <ul className={Style.lists}>
          {data.map((item, index) => (
            <li
              className={Style.list}
              key={index}
              onClick={() => handleSuggestionClick(item)}
            >
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteInput;
