import {
  FieldErrors,
  UseFormRegister,
  Control,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import Style from "./checkout.module.scss";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";
import { PhoneInput } from "../../ui/checkout-inputs";
import { ZipCodeInput } from "../../ui/checkout-inputs";
import { Textarea, Input, Label, Error } from "../../ui/common-form-elements";
import { useLocationStore, useZipCodeStore } from "../../../store";
import { AutoCompleteInput } from "../../../components/ui/checkout-inputs";
import Container from "../../../components/ui/checkout-input-container";

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
    <div className={Style.content}>
      <Container>
        <Label label="Full Name" name="firstName" />

        <Input
          id="firstName"
          type="text"
          placeholder="Your first name"
          {...register("firstName")}
          error={error.firstName}
        />

        <Error error={error.firstName} />
      </Container>

      <Container>
        <Label label="Last Name" name="lastName" />

        <Input
          id="lastName"
          type="text"
          placeholder="Your last name"
          {...register("lastName")}
          error={error.lastName}
        />

        <Error error={error.lastName} />
      </Container>

      <Container>
        <Label label="Country / Region" name="country" />

        <AutoCompleteInput
          id="country"
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

        <Error error={error.country} />
      </Container>

      <Container>
        <Label label="Town / City" name="city" />

        <AutoCompleteInput
          id="city"
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

        <Error error={error.city} />
      </Container>

      <Container>
        <Label label="Street Address" name="address" />

        <AutoCompleteInput
          id="address"
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

        <Error error={error.address} />
      </Container>

      <Container>
        <Label label="Apartment (optional)" name="apartment" />

        <Input
          id="apartment"
          type="text"
          placeholder="Apartment, suite, unit, etc"
          {...register("apartment")}
          error={error.apartment}
        />

        <Error error={error.apartment} />
      </Container>

      <Container>
        <Label label="State / Province" name="state" />

        <AutoCompleteInput
          id="state"
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

        <Error error={error.state} />
      </Container>

      <Container>
        <Label label="Zip Code (optional)" name="zip" />

        <ZipCodeInput
          id="zip"
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
        <Label label="Email Address" name="email" />

        <Input
          id="email"
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={error.email}
        />

        <Error error={error.email} />
      </Container>

      <Container>
        <Label label="Phone Number" name="phone" />

        <PhoneInput
          country="us"
          placeholder="Phone"
          control={control}
          error={error.phone}
        />

        <Error error={error.phone} />
      </Container>

      <Container>
        <Label label="Order notes (optional)" name="message" />

        <Textarea id="message" placeholder="Message" {...register("message")} />
      </Container>
    </div>
  );
};

export default InputFields;
