import { FieldError } from "react-hook-form";
import Style from "./error-message.module.scss";

interface Props {
  error?: FieldError;
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return error ? <span className={Style.error}>{error.message}</span> : null;
};

export default ErrorMessage;
