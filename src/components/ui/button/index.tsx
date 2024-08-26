import Link from "next/link";

import Style from "./button.module.scss";

interface Props {
  button?: boolean;
  link?: boolean;
  className?: string;
  value: string | JSX.Element;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
}

export const Button: React.FC<Props> = ({
  className,
  value,
  svgLeft,
  svgRight,
  button,
  link,
}) => {
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

      {link && (
        <Link href="#" className={buttonClass}>
          {svgLeft}
          {value}
          {svgRight}
        </Link>
      )}
    </>
  );
};
