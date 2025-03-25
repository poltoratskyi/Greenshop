import {
  FieldErrors,
  UseFormRegister,
  Control,
  UseFormSetValue,
  UseFormWatch,
  Controller,
} from "react-hook-form";
import Style from "./checkout.module.scss";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";
import { PhoneInput } from "../../ui/checkout-inputs";
import { ZipCodeInput } from "../../ui/checkout-inputs";
import {
  Textarea,
  Input,
  Label,
  Error,
  Container,
} from "../../ui/common-form-elements";
import { useLocationStore, useZipCodeStore } from "../../../store";
import { AutoCompleteInput } from "../../../components/ui/checkout-inputs";
import { Content } from "../layout";

interface Props {
  control: Control<CheckoutFormFields>;
  error: FieldErrors<CheckoutFormFields>;

  watch: UseFormWatch<CheckoutFormFields>;
  register: UseFormRegister<CheckoutFormFields>;
  setValue: UseFormSetValue<CheckoutFormFields>;
}

const InputFields: React.FC<Props> = ({
  control,
  error,

  watch,
  register,
  setValue,
}) => {
  const requestError = useZipCodeStore((state) => state.error);

  const isZipCodeLoading = useZipCodeStore((state) => state.isLoading);

  const countryData = useLocationStore((state) => state.countryData);
  const cityData = useLocationStore((state) => state.cityData);
  const addressData = useLocationStore((state) => state.addressData);
  const stateData = useLocationStore((state) => state.stateData);

  const isCountryDataLoading = useLocationStore(
    (state) => state.isCountryDataLoading
  );
  const isCityDataLoading = useLocationStore(
    (state) => state.isCityDataLoading
  );
  const isAddressDataLoading = useLocationStore(
    (state) => state.isAddressDataLoading
  );
  const isStateDataLoading = useLocationStore(
    (state) => state.isStateDataLoading
  );

  const loadCountry = useLocationStore((state) => state.loadCountry);
  const loadCity = useLocationStore((state) => state.loadCity);
  const loadAddress = useLocationStore((state) => state.loadAddress);
  const loadState = useLocationStore((state) => state.loadState);

  const resetCountryData = useLocationStore((state) => state.resetCountryData);
  const resetCityData = useLocationStore((state) => state.resetCityData);
  const resetAddressData = useLocationStore((state) => state.resetAddressData);
  const resetStateData = useLocationStore((state) => state.resetStateData);

  return (
    <Content>
      <Container>
        <Label label="Full Name" name="checkout-first-name" />

        <Input
          id="checkout-first-name"
          type="text"
          placeholder="Your first name"
          {...register("firstName")}
          error={error.firstName}
        />

        {error.firstName && <Error error={error.firstName} />}
      </Container>

      <Container>
        <Label label="Last Name" name="checkout-last-name" />

        <Input
          id="checkout-last-name"
          type="text"
          placeholder="Your last name"
          {...register("lastName")}
          error={error.lastName}
        />

        {error.lastName && <Error error={error.lastName} />}
      </Container>

      <Container>
        <Label label="Country / Region" name="checkout-country" />

        <AutoCompleteInput
          id="checkout-country"
          name="country"
          placeholder="Select your country / region"
          type="text"
          data={countryData}
          isLoading={isCountryDataLoading}
          resetData={resetCountryData}
          fetchLocation={loadCountry}
          setValue={setValue}
          watch={watch}
          error={error.country}
        />

        {error.country && <Error error={error.country} />}
      </Container>

      <Container>
        <Label label="Town / City" name="checkout-city" />

        <AutoCompleteInput
          id="checkout-city"
          name="city"
          placeholder="Select your city or town"
          type="text"
          data={cityData}
          isLoading={isCityDataLoading}
          resetData={resetCityData}
          fetchLocation={loadCity}
          setValue={setValue}
          watch={watch}
          error={error.city}
        />

        {error.city && <Error error={error.city} />}
      </Container>

      <Container>
        <Label label="Street Address" name="checkout-address" />

        <AutoCompleteInput
          id="checkout-address"
          name="address"
          placeholder="Select your street address"
          type="text"
          data={addressData}
          isLoading={isAddressDataLoading}
          resetData={resetAddressData}
          fetchLocation={loadAddress}
          setValue={setValue}
          watch={watch}
          error={error.address}
        />

        {error.address && <Error error={error.address} />}
      </Container>

      <Container>
        <Label
          label="Apartment (optional)"
          name="checkout-apartment"
          mark="checkout-apartment"
        />

        <Input
          id="checkout-apartment"
          type="text"
          placeholder="Apartment, suite, unit, etc"
          {...register("apartment")}
          error={error.apartment}
        />

        {error.apartment && <Error error={error.apartment} />}
      </Container>

      <Container>
        <Label label="State / Province" name="checkout-state" />

        <AutoCompleteInput
          id="checkout-state"
          name="state"
          placeholder="Select a state / province"
          type="text"
          data={stateData}
          isLoading={isStateDataLoading}
          resetData={resetStateData}
          fetchLocation={loadState}
          setValue={setValue}
          watch={watch}
          error={error.state}
        />

        {error.state && <Error error={error.state} />}
      </Container>

      <Container>
        <Label
          label="Zip Code (optional)"
          name="checkout-zip"
          mark="checkout-zip"
        />

        <ZipCodeInput
          id="checkout-zip"
          name="zip"
          type="text"
          placeholder="Enter your zip code"
          isLoading={isZipCodeLoading}
          watch={watch}
          setValue={setValue}
          error={error.zip}
        />

        {error.zip && <Error error={error.zip} />}
        {requestError && <Error requestError={requestError} />}
      </Container>

      <Container>
        <Label label="Email Address" name="checkout-email" />

        <Input
          id="checkout-email"
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={error.email}
        />

        {error.email && <Error error={error.email} />}
      </Container>

      <Container>
        <Label label="Phone Number" name="phone" />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              country="us"
              placeholder="Phone"
              error={error.phone}
              {...field}
            />
          )}
        />

        {error.phone && <Error error={error.phone} />}
      </Container>

      <Container>
        <Label
          label="Order notes (optional)"
          name="checkout-message"
          mark="checkout-message"
        />

        <Textarea
          id="checkout-message"
          placeholder="Message"
          {...register("notes")}
        />
      </Container>
    </Content>
  );
};

export default InputFields;
