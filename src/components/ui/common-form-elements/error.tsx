import { FieldError } from "react-hook-form";
import Style from "./common-form-elements.module.scss";

interface Props {
  error?: FieldError;
  requestError?: string | null;
}

const Error: React.FC<Props> = ({ error, requestError }) => {
  return (
    <>
      {error ? (
        <span className={Style.errorMessage}>{error.message}</span>
      ) : null}
      {requestError ? (
        <span className={Style.errorMessage}>{requestError}</span>
      ) : null}
    </>
  );
};

export default Error;
