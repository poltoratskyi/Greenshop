"use client";

import React, { useRef } from "react";
import { useClickAway } from "react-use";
import Style from "./search-bar.module.scss";
import SearchResults from "../../shared/search-results";
import Loader from "../loader";
import { svgClose, svgSearch } from "./static-data";
import { useSearchBar } from "../../../hooks";
import Overlay from "@/components/ui/overlay";

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
    isSearchOpen && clearSearch();
  });

  if (isLoading) {
    return (
      <>
        <Overlay isVisible={isSearchOpen} />

        <div
          ref={ref}
          className={`${
            isSearchOpen
              ? `${Style.searchItemsInput} ${Style.visible}`
              : Style.searchItemsInput
          }`}
        >
          <div className={Style.header}>
            <span className={Style.svgSearch}>{svgSearch}</span>

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
              onClick={() => isSearchOpen && clearSearch()}
              className={Style.svgClose}
            >
              {svgClose}
            </span>
          </div>

          <Loader search />
        </div>
      </>
    );
  }

  return (
    <>
      <Overlay isVisible={isSearchOpen} />

      <div
        ref={ref}
        className={`${
          isSearchOpen
            ? `${Style.searchItemsInput} ${Style.visible}`
            : Style.searchItemsInput
        }`}
      >
        <div className={Style.header}>
          <span className={Style.svgSearch}>{svgSearch}</span>

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
            onClick={() => isSearchOpen && clearSearch()}
            className={Style.svgClose}
          >
            {svgClose}
          </span>
        </div>

        {searchResults.length > 0 && <SearchResults />}
      </div>
    </>
  );
};

export default SearchBar;
