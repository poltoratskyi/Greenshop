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
import { useLocationStore, useZipCodeStore } from "../../../store";
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

  const loadCountry = useLocationStore((state) => state.loadCountry);
  const loadCity = useLocationStore((state) => state.loadCity);
  const loadAddress = useLocationStore((state) => state.loadAddress);
  const loadState = useLocationStore((state) => state.loadState);

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
          fetchLocation={loadCity}
          setValue={setValue}
          watch={watch}
          error={error.country}
        />

        <Error error={error.city} />
      </Block>

      <Block>
        <Label label="Street Address" name="address" />

        <AutoCompleteInput
          id="address"
          name="address"
          placeholder="Street"
          type="text"
          fetchLocation={loadAddress}
          setValue={setValue}
          watch={watch}
          error={error.country}
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
          fetchLocation={loadState}
          setValue={setValue}
          watch={watch}
          error={error.country}
        />

        <Error error={error.state} />
      </Block>

      <Block>
        <Label label="Zip Code (optional)" name="zip" />

        <ZipCodeInput
          id="zip"
          name="zip"
          type="text"
          placeholder="20500"
          setValue={setValue}
        />

        <Error requestError={requestError} />
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

        <Error error={error.state} />
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
