"use client";

import React, { useEffect, useRef } from "react";
import { useClickAway, useDebounce } from "react-use";
import Style from "./search-items-input.module.scss";
import SearchResults from "../../shared/search-results";
import Loader from "../../shared/loaders/default";
import SaleBanner from "../sale-banner";
import { useSearchStore, useUIStore } from "../../../store";
import { svgClose, svgSearch } from "./static-data";

const SearchBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isSearchOpen = useUIStore((state) => state.isSearchOpen);
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);

  const searchQuery = useSearchStore((state) => state.searchQuery);
  const searchResults = useSearchStore((state) => state.searchResults);
  const isLoading = useSearchStore((state) => state.isLoading);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const fetchSearchResults = useSearchStore(
    (state) => state.fetchSearchResults
  );
  const resetSearchResults = useSearchStore(
    (state) => state.resetSearchResults
  );

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSearchOpen) {
      const value = e.target.value.trimStart();
      setSearchQuery(value);
    }

    return;
  };

  useDebounce(
    () => {
      searchQuery.length >= 2 ? fetchSearchResults() : resetSearchResults();
    },
    350,
    [searchQuery]
  );

  useClickAway(ref, () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchQuery("");
      resetSearchResults();
    }
  });

  useEffect(() => {
    searchQuery !== ""
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchQuery]);

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
                  setIsSearchOpen(false);
                  setSearchQuery("");
                  resetSearchResults();
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
                setIsSearchOpen(false);
                setSearchQuery("");
                resetSearchResults();
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
