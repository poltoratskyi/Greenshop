import Style from "./common-form-elements.module.scss";
import { FieldError } from "react-hook-form";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  error?: FieldError;
}

const Input: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,
  error,
  ...props
}) => {
  return (
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
  );
};

export default Input;
