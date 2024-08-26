import React from "react";

import { Item } from "../../../types";

import Style from "./input.module.scss";

import { Result } from "../../shared/search-result";
import { Button } from "../button";

interface Props {
  location: string;
  inputPlaceholder: string;
  btnText?: string | JSX.Element;
  btnClassName?: string;
  svgSearch?: JSX.Element;
  svgClose?: JSX.Element;
  inputValue?: string;
  searchResults?: Item[];
  setOpenSearch?: (openSearch: boolean) => void;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  location,
  btnText,
  btnClassName,
  inputPlaceholder,
  svgSearch,
  svgClose,
  inputValue,
  searchResults,
  setOpenSearch,
  handleSearch,
}) => {
  const inputLocation = Style[location];

  return (
    <div className={inputLocation}>
      <div className={Style.content}>
        {svgSearch && <span className={Style.svg_search}>{svgSearch}</span>}

        <input
          type="text"
          placeholder={inputPlaceholder}
          onChange={handleSearch}
          value={inputValue}
        />

        {svgClose && (
          <span
            onClick={() => {
              setOpenSearch && setOpenSearch(false);
              document.body.style.overflow = "";
            }}
            className={Style.svg_close}
          >
            {svgClose}
          </span>
        )}

        {btnText && (
          <Button button={true} className={btnClassName} value={btnText} />
        )}
      </div>

      {searchResults && searchResults.length > 0 && (
        <Result searchResults={searchResults} />
      )}
    </div>
  );
};
