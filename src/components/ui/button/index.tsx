import React from "react";

import Style from "./button.module.scss";

interface Props {
  className: string;
  value: string;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
}

export const Button: React.FC<Props> = ({
  className,
  value,
  svgLeft,
  svgRight,
}) => {
  const buttonClass = Style[className];

  return (
    <button className={buttonClass}>
      {svgLeft}
      {value}
      {svgRight}
    </button>
  );
};
