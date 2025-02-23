import { FieldError } from "react-hook-form";
import Style from "./common-form-elements.module.scss";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  value?: string;
  error?: FieldError;
  errorRequest?: string | null;

  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({
  id,
  name,
  placeholder,
  type,
  value,
  error,
  errorRequest,

  onChangeHandler,
}) => {
  return (
    <input
      className={`${
        error || errorRequest
          ? `${Style.input} ${Style.error}`
          : `${Style.input}`
      }`}
      id={id}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChangeHandler(e)}
      autoComplete="off"
    />
  );
};

export default CustomInput;
