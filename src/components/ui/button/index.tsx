"use client";

import { JSX } from "react";
import { useRouter } from "next/navigation";
import Style from "./button.module.scss";
import { useCartStore } from "../../../store";
import Loader from "./loader";

interface Props {
  buy?: boolean;
  addToCart?: boolean;
  button?: boolean;
  className?: string;
  value?: string | JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;

  handleAddToCart?: () => void;
}

const Button: React.FC<Props> = ({
  buy,
  addToCart,
  button,
  className,
  value,
  svgLeft,
  svgRight,

  handleAddToCart,
}) => {
  const router = useRouter();

  const isLoadingItem = useCartStore((state) => state.isLoadingItem);

  const buttonClass = Style[className || ""];

  return (
    <>
      {button && (
        <button className={buttonClass}>
          {svgLeft}
          {value}
          {svgRight}
        </button>
      )}

      {addToCart && (
        <button
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
          onClick={() => {
            handleAddToCart && handleAddToCart();
            router.push("/cart");
          }}
          className={buttonClass}
        >
          {value}
        </button>
      )}
    </>
  );
};

export default Button;
