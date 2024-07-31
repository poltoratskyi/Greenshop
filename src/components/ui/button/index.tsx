import React from "react";

import Style from "./button.module.scss";

interface Props {
  className: string;
  value: string;
  svg?: JSX.Element;
}

export const Button: React.FC<Props> = ({ className, svg, value }) => {
  const buttonClass = Style[className];

  return (
    <button className={buttonClass}>
      {svg}
      {value}
    </button>
  );
};
