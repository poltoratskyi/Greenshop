"use client";

import { JSX } from "react";
import { useRouter } from "next/navigation";
import Style from "./button.module.scss";
import { useCartStore } from "../../../store";
import Loader from "./loader";

interface Props {
  buy?: boolean;
  submit?: boolean;
  addToCart?: boolean;
  button?: boolean;
  className?: string;
  value?: string | JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
  choose?: boolean;

  handleAddToCart?: () => void;
  handleChangeResult?: () => void;
}

const Button: React.FC<Props> = ({
  buy,
  submit,
  addToCart,
  button,
  className,
  value,
  svgLeft,
  svgRight,
  choose,

  handleAddToCart,
  handleChangeResult,
}) => {
  const router = useRouter();
  const isLoadingItem = useCartStore((state) => state.isLoadingItem);
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

      {submit && (
        <button type="submit" className={buttonClass}>
          {svgLeft}
          {value}
          {svgRight}
        </button>
      )}

      {addToCart && (
        <button
          type="button"
          style={{
            pointerEvents: isLoadingItem ? "none" : "auto",
            cursor: isLoadingItem ? "not-allowed" : "pointer",
          }}
          onClick={() => handleAddToCart && handleAddToCart()}
          className={buttonClass}
        >
          {isLoadingItem ? (
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
