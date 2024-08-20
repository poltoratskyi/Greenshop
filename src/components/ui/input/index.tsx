"use client";

import React, { useEffect, useState } from "react";

import { Button } from "../button";

import Style from "./input.module.scss";

import { Result } from "../../shared/search-result";
import { axiosItem } from "../../../service/search";
import { useDebounce } from "react-use";

interface Props {
  openSearch?: boolean;
  location: string;
  className: string;
  inputPlaceholder: string;
  inputTitle?: string;
  inputDescr?: string;
  btnText?: string;
  svgSearch?: JSX.Element;
  svgClose?: JSX.Element;
  toggleSearch?: (openSearch: boolean) => void;
}

export type Item = {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  tags: string;
  sku: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  firstVariation?: {
    price: number;
    sailPrice: number;
    onSale: boolean;
  };
};

export const Input: React.FC<Props> = ({
  openSearch,
  location,
  className,
  inputTitle,
  inputDescr,
  btnText,
  inputPlaceholder,
  svgSearch,
  svgClose,
  toggleSearch,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  const inputLocation = Style[location];
  const inputClass = Style[className];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();

    setInputValue(value);
  };

  useDebounce(
    () => {
      const fetchItems = async () => {
        if (inputValue !== "") {
          try {
            const response = await axiosItem(inputValue);
            if (response) {
              setSearchResults(response);
            }
          } catch (err) {
            console.error("Error fetching items:", err);
          }
        } else {
          setSearchResults([]);
        }
      };

      fetchItems();
    },
    250,
    [inputValue]
  );

  return (
    <div className={inputLocation}>
      {inputTitle && <h3 className={Style.title}>{inputTitle}</h3>}
      <div className={Style.content}>
        {svgSearch && <span className={Style.svg_search}>{svgSearch}</span>}

        <input
          type="text"
          placeholder={inputPlaceholder}
          className={inputClass}
          onChange={handleSearch}
          value={inputValue}
        />

        {svgClose && (
          <span
            onClick={() => {
              toggleSearch && toggleSearch(false);
              document.body.style.overflow = "";
            }}
            className={Style.svg_close}
          >
            {svgClose}
          </span>
        )}

        {btnText && <Button className="join" value={btnText} />}
      </div>

      {inputDescr && <p className={Style.descr}>{inputDescr}</p>}

      {openSearch && <Result searchResults={searchResults} />}
    </div>
  );
};
