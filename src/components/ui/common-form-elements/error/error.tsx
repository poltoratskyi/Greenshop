import { FieldError } from "react-hook-form";
import Style from "./error.module.scss";

interface Props {
  error?: FieldError;
  requestError?: string | null;
}

const Error: React.FC<Props> = ({ error, requestError }) => {
  return (
    <>
      {error ? <span className={Style.error}>{error.message}</span> : null}
      {requestError ? (
        <span className={Style.error}>{requestError}</span>
      ) : null}
    </>
  );
};

export default Error;
