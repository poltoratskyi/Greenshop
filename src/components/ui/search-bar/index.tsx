"use client";

import React, { useRef } from "react";
import { useClickAway } from "react-use";
import Style from "./search-items-input.module.scss";
import SearchResults from "../../shared/search-results";
import Loader from "../../ui/loaders/default";
import SaleBanner from "../sale-banner";
import { svgClose, svgSearch } from "./static-data";
import { useSearchBar } from "../../../hooks";

const SearchBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    isSearchOpen,
    searchQuery,
    searchResults,
    isLoading,

    onSearchInputChange,
    clearSearch,
  } = useSearchBar();

  useClickAway(ref, () => {
    if (isSearchOpen) {
      clearSearch();
    }
  });

  if (isLoading) {
    return (
      <div
        className={`${
          isSearchOpen ? `${Style.overlay} ${Style.visible}` : Style.overlay
        }`}
      >
        <SaleBanner />
        <div
          ref={ref}
          className={`${
            isSearchOpen
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
              onChange={(e) => onSearchInputChange(e)}
              value={searchQuery}
              autoComplete="off"
              required
            />

            <span
              onClick={() => {
                if (isSearchOpen) {
                  clearSearch();
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
        isSearchOpen ? `${Style.overlay} ${Style.visible}` : Style.overlay
      }`}
    >
      <SaleBanner />

      <div
        ref={ref}
        className={`${
          isSearchOpen
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
            onChange={(e) => onSearchInputChange(e)}
            value={searchQuery}
            autoComplete="off"
            required
          />

          <span
            onClick={() => {
              if (isSearchOpen) {
                clearSearch();
              }
            }}
            className={Style.svg_close}
          >
            {svgClose}
          </span>
        </div>

        {searchResults.length > 0 && <SearchResults />}
      </div>
    </div>
  );
};

export default SearchBar;
