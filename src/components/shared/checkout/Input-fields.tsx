import { FieldErrors, UseFormRegister } from "react-hook-form";
import Textarea from "../../ui/checkout-fields/textarea";
import Input from "../../ui/checkout-fields/input";
import Style from "./checkout.module.scss";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";

interface Props {
  register: UseFormRegister<CheckoutFormFields>;
  errors: FieldErrors<CheckoutFormFields>;
}

const InputFields: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={Style.content}>
      <Input
        id="firstName"
        label="First Name"
        placeholder=""
        type="text"
        {...register("firstName")}
        error={errors.firstName}
      />

      <Input
        id="lastName"
        label="Last Name"
        placeholder=""
        type="text"
        {...register("lastName")}
        error={errors.lastName}
      />

      <Input
        id="city"
        label="Town / City"
        placeholder=""
        type="text"
        {...register("city")}
        error={errors.city}
      />

      <Input
        id="email"
        label="Email Address"
        placeholder=""
        type="email"
        {...register("email")}
        error={errors.email}
      />

      <Input
        id="phone"
        label="Phone Number"
        placeholder=""
        type="tel"
        {...register("phone")}
        error={errors.phone}
      />

      <Input
        id="address"
        label="Address"
        placeholder=""
        type="text"
        {...register("address")}
        error={errors.address}
      />

      <Input
        id="zip"
        label="Zip Code"
        placeholder=""
        type="number"
        {...register("zip")}
        error={errors.zip}
      />

      <Input
        id="country"
        label="Country"
        placeholder="Select a country or region"
        type="text"
        {...register("country")}
        error={errors.country}
      />

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
