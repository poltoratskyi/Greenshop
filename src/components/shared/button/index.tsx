"use client";

import { JSX } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Style from "./button.module.scss";

import { useCartStore } from "../../../store";
import Loader from "./loader";

interface Props {
  handleAddToCart?: () => void;
  buy?: boolean;
  addToCart?: boolean;
  button?: boolean;
  link?: boolean;
  linkValue?: string;
  className?: string;
  value?: string | JSX.Element;
  svgCenter?: JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
}

const Button: React.FC<Props> = ({
  handleAddToCart,
  buy,
  addToCart,
  button,
  link,
  linkValue,
  className,
  value,
  svgCenter,
  svgLeft,
  svgRight,
}) => {
  const router = useRouter();

  const isLoadingItem = useCartStore((state) => state.isLoadingItem);

  const buttonClass = Style[className || ""];

  return (
    <>
      {button && (
        <button className={buttonClass}>
          {svgLeft}
          {svgCenter}
          {value}
          {svgRight}
        </button>
      )}

      {link && (
        <Link href={linkValue ? linkValue : "#"} className={buttonClass}>
          {svgLeft}
          {value}
          {svgRight}
        </Link>
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
