import { JSX } from "react";
import Style from "./button.module.scss";
import Loader from "./loader";

interface Props {
  type: "button" | "submit";
  className: string;
  value: string | JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
  isLoading?: boolean;
  disabled?: boolean;

  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  type,
  className,
  value,
  svgLeft,
  svgRight,
  isLoading,
  disabled,

  onClick,
}) => {
  const buttonClass = `${Style[className]} ${isLoading ? Style.loading : ""} ${
    disabled ? Style.disabled : ""
  }`;

  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className={buttonClass}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          {svgLeft && svgLeft}
          {value}
          <Loader />
        </>
      ) : (
        <>
          {svgLeft && svgLeft}
          {value}
          {svgRight && svgRight}
        </>
      )}
    </button>
  );
};

export default Button;
