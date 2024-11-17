"use client";

import Link from "next/link";

import Style from "./button.module.scss";

interface Props {
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
  className,
  value,
  svgLeft,
  svgCenter,
  svgRight,
  button,
  link,
  linkValue,
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
    </>
  );
};

export default Button;
