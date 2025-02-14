import Style from "./checkout-input.module.scss";
import { FieldError } from "react-hook-form";

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  error?: FieldError;
}

const Input: React.FC<Props> = ({
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
      <label className={Style.label} htmlFor={name}>
        {label} <span>*</span>
      </label>

      <input
        className={`${
          error ? `${Style.input} ${Style.false}` : `${Style.input}`
        }`}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
        {...props}
      />

      {error && <span className={Style.error}>{error.message}</span>}
    </div>
  );
};

export default Input;
