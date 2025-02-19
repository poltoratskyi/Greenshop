import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phone-input.css";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Style from "../../ui/common-form-elements/common-form-elements.module.scss";
import ErrorMessage from "../error-message";
import { CheckoutFormFields } from "@/schemas/checkout-form-schema";

interface Props {
  control: Control<CheckoutFormFields>;
  error?: FieldErrors<CheckoutFormFields>;
}

const PhoneInputField: React.FC<Props> = ({ control, error }) => {
  return (
    <div className={Style.block}>
      <label className={Style.label} htmlFor="phone">
        Phone Number <span>*</span>
      </label>

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <PhoneInput
            country="us"
            placeholder="Phone"
            containerClass="react-tel-input"
            buttonClass={`${error?.phone ? "error" : "flag-dropdown"}`}
            inputClass={`${error?.phone ? "error" : "form-control"}`}
            dropdownClass="country-list"
            inputProps={{
              id: "phone",
              autoComplete: "off",
            }}
            {...field}
          />
        )}
      />

      <ErrorMessage error={error?.phone} />
    </div>
  );
};

export default PhoneInputField;
