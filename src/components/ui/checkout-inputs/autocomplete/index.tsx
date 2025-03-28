"use client";

import { useLocationStore, useUIStore } from "../../../../store";
import { CustomInput } from "../../common-form-elements";
import { CheckoutFormFields } from "../../../../schemas";
import { FieldError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useAutocompleteCheckout } from "../../../../hooks";
import { NominatimLocation } from "../../../../types";
import { useRef } from "react";
import { useClickAway } from "react-use";
import { Location } from "../../location-details";
import { Container } from "../../location-details";

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

const Autocomplete: React.FC<Props> = ({
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

  const errorRequest = useLocationStore((state) => state.error);

  const setIsAutocompleteOpen = useUIStore(
    (state) => state.setIsAutocompleteOpen
  );

  const value = watch(name);

  const { searchHandler } = useAutocompleteCheckout(
    value,

    name,

    setValue,
    fetchLocation
  );

  const handleSuggestionClick = (item: NominatimLocation) => {
    setIsAutocompleteOpen(false);
    setValue(name, item.display_name);
    resetData();
  };

  useClickAway(ref, () => {
    resetData();
  });

  return (
    <Container ref={ref}>
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
        <Location data={data} handleSuggestionClick={handleSuggestionClick} />
      )}
    </Container>
  );
};

export default Autocomplete;
