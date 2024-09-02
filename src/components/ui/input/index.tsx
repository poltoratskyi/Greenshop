import React from "react";

import Style from "./input.module.scss";
import { Button } from "../button";

interface Props {
  id: string;
  name: string;
  type: string;
  className: string;
  inputPlaceholder: string;
  svg?: boolean;
  svgSearch?: JSX.Element;
  svgClose?: JSX.Element;
  svgFilter?: JSX.Element;
  inputValue?: string;
  setOpenSearch?: (openSearch: boolean) => void;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  id,
  name,
  type,
  className,
  inputPlaceholder,
  svg,
  svgSearch,
  svgClose,
  svgFilter,
  inputValue,
  setOpenSearch,
  handleSearch,
}) => {
  const inputClass = Style[className];

  return svg ? (
    <div className={Style.wrapper}>
      <span className={Style.svg_search}>{svgSearch}</span>

      <input
        id={id}
        name={name}
        type={type}
        className={inputClass}
        placeholder={inputPlaceholder}
        onChange={handleSearch}
        value={inputValue}
        autoComplete="off"
        required
      />

      {svgClose && (
        <span
          onClick={() => {
            if (setOpenSearch) {
              document.body.style.overflow = "auto";
              setOpenSearch(false);
            }
          }}
          className={Style.svg_close}
        >
          {svgClose}
        </span>
      )}

      {svgFilter && (
        <Button
          value={svgFilter}
          button={true}
          className="filter_mobile"
        ></Button>
      )}
    </div>
  ) : (
    <input
      id={id}
      name={name}
      type={type}
      className={inputClass}
      placeholder={inputPlaceholder}
      onChange={handleSearch}
      value={inputValue}
      autoComplete="off"
      required
    />
  );
};
