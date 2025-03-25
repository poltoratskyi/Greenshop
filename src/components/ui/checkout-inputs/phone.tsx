import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phone.css";
import { FieldError } from "react-hook-form";
import { onlyCountries } from "./static-data";

interface Props {
  placeholder: string;
  country: string;
  error?: FieldError;
}

const PhoneInputField: React.FC<Props> = ({
  placeholder,
  country,
  error,
  ...props
}) => {
  return (
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
      {...props}
    />
  );
};

export default PhoneInputField;
