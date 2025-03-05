"use client";

import { JSX } from "react";
import { useRouter } from "next/navigation";
import Style from "./button.module.scss";
import Loader from "./loader";

interface Props {
  buy?: boolean;
  formSubmitted?: boolean;
  addToCart?: boolean;
  button?: boolean;
  className?: string;
  value?: string | JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
  choose?: boolean;
  isLoading?: boolean;

  handleAddToCart?: () => void;
  handleChangeResult?: () => void;
}

const Button: React.FC<Props> = ({
  buy,
  formSubmitted,
  addToCart,
  button,
  className,
  value,
  svgLeft,
  svgRight,
  choose,
  isLoading,

  handleAddToCart,
  handleChangeResult,
}) => {
  const router = useRouter();
  const buttonClass = Style[className || ""];

  return (
    <>
      {button && (
        <button type="button" className={buttonClass}>
          {svgLeft}
          {value}
          {svgRight}
        </button>
      )}

      {formSubmitted && (
        <button
          style={{
            pointerEvents: isLoading ? "none" : "auto",
            cursor: isLoading ? "not-allowed" : "pointer",
            backgroundColor: isLoading ? "#fff" : "#46a358",
            border: isLoading ? "1px solid #46a358" : "none",
          }}
          type="submit"
          className={buttonClass}
        >
          {isLoading ? <Loader modal /> : value}
        </button>
      )}

      {addToCart && (
        <button
          type="button"
          style={{
            pointerEvents: isLoading ? "none" : "auto",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          onClick={() => handleAddToCart && handleAddToCart()}
          className={buttonClass}
        >
          {isLoading ? (
            <>
              {value}
              <Loader />
            </>
          ) : (
            value
          )}
        </button>
      )}

      {buy && (
        <button
          type="button"
          onClick={() => {
            handleAddToCart && handleAddToCart();
            router.push("/cart");
          }}
          className={buttonClass}
        >
          {value}
        </button>
      )}

      {choose && (
        <button
          type="button"
          onClick={() => handleChangeResult && handleChangeResult()}
          className={buttonClass}
        >
          {value}
        </button>
      )}
    </>
  );
};

export default Button;
