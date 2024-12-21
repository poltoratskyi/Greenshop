"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import Style from "./button.module.scss";

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
          onClick={() => handleAddToCart && handleAddToCart()}
          className={buttonClass}
        >
          {value}
        </button>
      )}

      {buy && (
        <button
          onClick={() => {
            router.push("/cart");
            handleAddToCart && handleAddToCart();
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
