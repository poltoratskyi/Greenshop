"use client";

import { useLocationStore, useUIStore } from "../../../../store";
import { CustomInput } from "../../common-form-elements";
import { FieldError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useAutocompleteProfileAddress } from "../../../../hooks";
import { NominatimLocation } from "../../../../types";
import Style from "./address.module.scss";
import { useRef } from "react";
import { useClickAway } from "react-use";
import { ProfileAddressFormFields } from "@/schemas";
import { Container, Location } from "../../location-details";

interface Props {
  id: string;
  name: keyof ProfileAddressFormFields;
  placeholder: string;
  type: string;
  error?: FieldError;
  data: NominatimLocation[];
  isLoading?: boolean;

  fetchLocation: (query: string, type: string) => Promise<void>;
  setValue: UseFormSetValue<ProfileAddressFormFields>;
  watch: UseFormWatch<ProfileAddressFormFields>;
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

  const { searchHandler } = useAutocompleteProfileAddress(
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
