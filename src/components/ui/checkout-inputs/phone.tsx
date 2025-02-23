import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phone.css";
import { Control, Controller, FieldError, FieldErrors } from "react-hook-form";
import { CheckoutFormFields } from "../../../schemas/checkout-form-schema";
import { onlyCountries } from "./static-data";

interface Props {
  placeholder: string;
  country: string;
  control: Control<CheckoutFormFields>;
  error?: FieldError;
}

const PhoneInputField: React.FC<Props> = ({
  placeholder,
  country,
  control,
  error,
}) => {
  return (
    <Controller
      name="phone"
      control={control}
      render={({ field }) => (
        <PhoneInput
          country={country}
          onlyCountries={onlyCountries}
          placeholder={placeholder}
          containerClass="react-tel-input"
          buttonClass={`${error ? "error" : "flag-dropdown"}`}
          inputClass={`${error ? "error" : "form-control"}`}
          dropdownClass="country-list"
          inputProps={{
            id: "phone",
            autoComplete: "off",
          }}
          {...field}
        />
      )}
    />
  );
};

export default PhoneInputField;
