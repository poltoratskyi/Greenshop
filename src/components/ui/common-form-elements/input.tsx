import ErrorMessage from "../error-message";
import Style from "./common-form-elements.module.scss";
import { FieldError } from "react-hook-form";

interface Props {
  hiddenLabel?: boolean;
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  type: string;
  error?: FieldError;
}

const Input: React.FC<Props> = ({
  hiddenLabel,
  id,
  label,
  name,
  placeholder,
  type,
  error,
  ...props
}) => {
  return (
    <div className={Style.block}>
      {!hiddenLabel && (
        <label className={Style.label} htmlFor={name}>
          {label} {name !== "zip" && name !== "apartment" && <span>*</span>}
        </label>
      )}

      <input
        className={`${
          error ? `${Style.input} ${Style.error}` : `${Style.input}`
        }`}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
        {...props}
      />

      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
