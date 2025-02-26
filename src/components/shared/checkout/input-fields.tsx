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
import {
  Block,
  Textarea,
  Input,
  Label,
  Error,
} from "../../ui/common-form-elements";
import { useLocationStore, useUIStore, useZipCodeStore } from "../../../store";
import { AutoCompleteInput } from "../../../components/ui/checkout-inputs";

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
      <Block>
        <Label label="Full Name" name="firstName" />

        <Input
          id="firstName"
          type="text"
          placeholder="Your first name"
          {...register("firstName")}
          error={error.firstName}
        />

        <Error error={error.firstName} />
      </Block>

      <Block>
        <Label label="Last Name" name="lastName" />

        <Input
          id="lastName"
          type="text"
          placeholder="Your last name"
          {...register("lastName")}
          error={error.lastName}
        />

        <Error error={error.lastName} />
      </Block>

      <Block>
        <Label label="Country / Region" name="country" />

        <AutoCompleteInput
          id="country"
          name="country"
          placeholder="Select a country / region"
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
      </Block>

      <Block>
        <Label label="Town / City" name="city" />

        <AutoCompleteInput
          id="city"
          name="city"
          placeholder="Select a city or town"
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
      </Block>

      <Block>
        <Label label="Street Address" name="address" />

        <AutoCompleteInput
          id="address"
          name="address"
          placeholder="Enter your street address"
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
      </Block>

      <Block>
        <Label label="Apartment (optional)" name="apartment" />

        <Input
          id="apartment"
          type="text"
          placeholder="Apartment, suite, unit, etc"
          {...register("apartment")}
          error={error.apartment}
        />

        <Error error={error.apartment} />
      </Block>

      <Block>
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
      </Block>

      <Block>
        <Label label="Zip Code (optional)" name="zip" />

        <ZipCodeInput
          id="zip"
          name="zip"
          type="text"
          placeholder="Enter your zip code"
          setValue={setValue}
          error={error.zip}
        />

        {error.zip && <Error error={error.zip} />}
        {requestError && <Error requestError={requestError} />}
      </Block>

      <Block>
        <Label label="Email Address" name="email" />

        <Input
          id="email"
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={error.email}
        />

        <Error error={error.email} />
      </Block>

      <Block>
        <Label label="Phone Number" name="phone" />

        <PhoneInput
          country="us"
          placeholder="Phone"
          control={control}
          error={error.phone}
        />

        <Error error={error.phone} />
      </Block>

      <Block>
        <Label label="Order notes (optional)" name="message" />

        <Textarea id="message" placeholder="Message" {...register("message")} />
      </Block>
    </div>
  );
};

export default InputFields;
