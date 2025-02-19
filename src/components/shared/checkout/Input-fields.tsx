import { FieldErrors, UseFormRegister, Control } from "react-hook-form";
import Textarea from "../../ui/common-form-elements/textarea";
import Input from "../../ui/common-form-elements/input";
import Style from "./checkout.module.scss";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";
import PhoneInput from "../../../components/ui/phone-input";

interface Props {
  control: Control<CheckoutFormFields>;
  register: UseFormRegister<CheckoutFormFields>;
  error: FieldErrors<CheckoutFormFields>;
}

const InputFields: React.FC<Props> = ({ control, register, error }) => {
  return (
    <div className={Style.content}>
      <Input
        id="firstName"
        label="First Name"
        type="text"
        placeholder="Your first name"
        {...register("firstName")}
        error={error.firstName}
      />

      <Input
        id="lastName"
        label="Last Name"
        type="text"
        placeholder="Your last name"
        {...register("lastName")}
        error={error.lastName}
      />

      <Input
        id="country"
        label="Country / Region"
        type="text"
        placeholder="Select a country / region"
        {...register("country")}
        error={error.country}
      />

      <Input
        id="city"
        label="Town / City"
        type="text"
        placeholder="Select a city or town"
        {...register("city")}
        error={error.city}
      />

      <Input
        id="address"
        label="Street Address"
        type="text"
        placeholder="Street"
        {...register("address")}
        error={error.address}
      />

      <Input
        id="apartment"
        label="Apartment (optional)"
        type="text"
        placeholder="Apartment, suite, unit, etc"
        {...register("apartment")}
        error={error.apartment}
      />

      <Input
        id="state"
        label="State / Province"
        type="text"
        placeholder="Select a state / province"
        {...register("state")}
        error={error.state}
      />

      <Input
        id="zip"
        label="Zip Code (optional)"
        type="number"
        placeholder="20500"
        {...register("zip")}
        error={error.zip}
      />

      <Input
        id="email"
        label="Email Address"
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={error.email}
      />

      <PhoneInput control={control} error={error} />

      <Textarea
        id="message"
        label="Order notes (optional)"
        placeholder="Message"
        {...register("message")}
      />
    </div>
  );
};

export default InputFields;
