"use client";

import Link from "next/link";

import { Item } from "../../../types";

import Style from "./button.module.scss";

interface Props {
  handleAddToCart?: () => void;
  addItem?: boolean;
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
  addItem,
  button,
  link,
  linkValue,
  className,
  value,
  svgCenter,
  svgLeft,
  svgRight,
}) => {
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

      {addItem && (
        <button
          onClick={() => handleAddToCart && handleAddToCart()}
          className={buttonClass}
        >
          {value}
        </button>
      )}
    </>
  );
};

export default Button;
/*  cartId: createUserCartToken.id,
        itemId: data.itemId,
  variationId: data.variationId, */
