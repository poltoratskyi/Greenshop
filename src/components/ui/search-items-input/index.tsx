"use client";

import React, { useEffect, useRef } from "react";
import { useClickAway, useDebounce } from "react-use";

import Style from "./search-items-input.module.scss";

import Results from "../search-items-result";
import Loader from "../../shared/loaders/default";
import SaleBanner from "../mobile-header/sale-banner";

import { useSearchStore, useUIStore } from "../../../store";

import { svgClose, svgSearch } from "./static-data";

const SearchItemsInput: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const search = useUIStore((state) => state.search);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);

  const inputValue = useSearchStore((state) => state.inputValue);
  const results = useSearchStore((state) => state.results);
  const isLoading = useSearchStore((state) => state.isLoading);
  const setInputValue = useSearchStore((state) => state.setInputValue);
  const loadSearch = useSearchStore((state) => state.loadSearch);
  const clearResults = useSearchStore((state) => state.clearResults);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (search) {
      const value = e.target.value.trimStart();
      setInputValue(value);
    }

    return;
  };

  useDebounce(
    () => {
      inputValue.length >= 2 ? loadSearch() : clearResults();
    },
    350,
    [inputValue]
  );

  useClickAway(ref, () => {
    if (search) {
      setOpenSearch(false);
      setInputValue("");
      clearResults();
    }
  });

  useEffect(() => {
    inputValue !== ""
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [inputValue]);

  if (isLoading) {
    return (
      <div
        className={`${
          search ? `${Style.overlay} ${Style.visible}` : Style.overlay
        }`}
      >
        <SaleBanner />
        <div
          ref={ref}
          className={`${
            search
              ? `${Style.search_items_input} ${Style.visible}`
              : Style.search_items_input
          }`}
        >
          <div className={Style.block}>
            <span className={Style.svg_search}>{svgSearch}</span>

            <input
              id="desktop-input"
              name="query"
              type="text"
              className={Style.search}
              placeholder="Find your plants"
              onChange={handleSearch}
              value={inputValue}
              autoComplete="off"
              required
            />

            <span
              onClick={() => {
                if (search) {
                  setOpenSearch(false);
                  setInputValue("");
                  clearResults();
                }
              }}
              className={Style.svg_close}
            >
              {svgClose}
            </span>
          </div>

          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        search ? `${Style.overlay} ${Style.visible}` : Style.overlay
      }`}
    >
      <SaleBanner />

      <div
        ref={ref}
        className={`${
          search
            ? `${Style.search_items_input} ${Style.visible}`
            : Style.search_items_input
        }`}
      >
        <div className={Style.block}>
          <span className={Style.svg_search}>{svgSearch}</span>

          <input
            id="desktop-input"
            name="query"
            type="text"
            className={Style.search}
            placeholder="Find your plants"
            onChange={handleSearch}
            value={inputValue}
            autoComplete="off"
            required
          />

          <span
            onClick={() => {
              if (search) {
                setOpenSearch(false);
                setInputValue("");
                clearResults();
              }
            }}
            className={Style.svg_close}
          >
            {svgClose}
          </span>
        </div>

        {results.length > 0 && <Results />}
      </div>
    </div>
  );
};

export default SearchItemsInput;
