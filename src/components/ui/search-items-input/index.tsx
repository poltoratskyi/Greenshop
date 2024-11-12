"use client";

import React, { useEffect, useRef } from "react";
import { useClickAway, useDebounce } from "react-use";

import Style from "./search-items-input.module.scss";

import Results from "../search-items-result";
import Loader from "../search-items-result/loader";
import TopInfo from "../mobile-header/top-info";

import { useSearchStore, useUIStore } from "../../../utils/store";

import { svgClose, svgSearch } from "./static-data";

const SearchItemsInput: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const openSearch = useUIStore((state) => state.openSearch);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);

  const inputValue = useSearchStore((state) => state.inputValue);
  const results = useSearchStore((state) => state.results);
  const isLoading = useSearchStore((state) => state.isLoading);
  const setInputValue = useSearchStore((state) => state.setInputValue);
  const fetchSearch = useSearchStore((state) => state.fetchSearch);
  const clearResults = useSearchStore((state) => state.clearResults);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (openSearch) {
      const value = e.target.value.trimStart();

      setInputValue(value);
    }

    return;
  };

  useDebounce(
    () => {
      fetchSearch();
    },
    350,
    [inputValue]
  );

  useClickAway(ref, () => {
    if (openSearch) {
      setOpenSearch && setOpenSearch(false);
      setInputValue("");
      clearResults();
    }
  });

  useEffect(() => {
    if (inputValue !== "" || results.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [inputValue, results]);

  if (isLoading) {
    return (
      <div
        className={`${
          openSearch ? `${Style.overlay} ${Style.visible}` : Style.overlay
        }`}
      >
        <TopInfo />
        <div
          ref={ref}
          className={`${
            openSearch
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
                if (openSearch) {
                  document.body.style.overflow = "auto";
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
        openSearch ? `${Style.overlay} ${Style.visible}` : Style.overlay
      }`}
    >
      <TopInfo />
      <div
        ref={ref}
        className={`${
          openSearch
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
              if (openSearch) {
                document.body.style.overflow = "auto";
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
