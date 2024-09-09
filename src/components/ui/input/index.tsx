"use client";

import React from "react";

import Style from "./input.module.scss";
import Button from "../button";

import { useUIStore, useSearchStore } from "@/utils/store";
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
}

const Input: React.FC<Props> = ({
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
}) => {
  const inputClass = Style[className];

  const openSearch = useUIStore((state) => state.openSearch);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setInputValue = useSearchStore((state) => state.setInputValue);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (openSearch) {
      const value = e.target.value.trimStart();

      setInputValue(value);
    }

    return;
  };

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

export default Input;
