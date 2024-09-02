"use client";

import React, { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

import { axiosItem } from "../../../service/search";

import Style from "./header.module.scss";

import { Item } from "../../../types";

import { Logo } from "./logo";
import { Links } from "./links";
import { Actions } from "./actions";
import { Mobile } from "./mobile";
import { Modal } from "../modal";
import { Input } from "../../ui/input";
import { Result } from "../search-result";
import { Overlay } from "../../ui/overlay";

const svgClose = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 513.552 513.552"
    enableBackground=":new 0 0 513.552 513.552;"
    fill="#cbcbcb"
  >
    <g>
      <g>
        <path d="M510.132,489.755c-0.476-0.556-0.995-1.075-1.552-1.552L276.9,256.382l231.822-231.68c5.577-5.577,5.577-14.619,0-20.196 c-5.577-5.577-14.619-5.577-20.196,0l-231.68,231.822L25.167,4.506c-5.577-5.577-14.619-5.577-20.196,0s-5.577,14.619,0,20.196 l231.822,231.68L4.972,488.062c-5.966,5.109-6.661,14.087-1.552,20.053c5.109,5.966,14.087,6.661,20.053,1.552 c0.556-0.476,1.075-0.995,1.552-1.552l231.822-231.68l231.68,231.822c5.109,5.966,14.087,6.661,20.053,1.552 C514.546,504.699,515.241,495.721,510.132,489.755z"></path>
      </g>
    </g>
  </svg>
);

export const svgSearch = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#A5A5A5">
    <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" />
  </svg>
);

export const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useDebounce(
    () => {
      const fetchItems = async () => {
        if (inputValue !== "") {
          try {
            const response = await axiosItem(inputValue);
            if (response) {
              setSearchResults(response as Item[]);
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
    350,
    [inputValue]
  );

  useEffect(() => {
    if (inputValue !== "" || searchResults.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [inputValue, searchResults]);

  useClickAway(ref, () => {
    setOpenSearch && setOpenSearch(false);
    setInputValue("");
    setSearchResults([]);
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();

    setInputValue(value);
  };

  return (
    <header className={Style.header}>
      <div className="container">
        <div className={Style.content}>
          <Logo />
          <Links />
          <Actions setOpenModal={setOpenModal} setOpenSearch={setOpenSearch} />
        </div>

        {(openSearch || openModal) && (
          <Overlay visible={openSearch || openModal} />
        )}

        <div
          ref={ref}
          className={`${
            openSearch ? `${Style.block} ${Style.visible}` : Style.block
          }`}
        >
          <Input
            id="searchInput"
            name="query"
            type="text"
            className="search"
            inputPlaceholder="Find your plants"
            inputValue={inputValue}
            svg={true}
            svgClose={svgClose}
            svgSearch={svgSearch}
            setOpenSearch={setOpenSearch}
            handleSearch={handleSearch}
          />

          {searchResults.length > 0 && <Result searchResults={searchResults} />}
        </div>

        <Modal
          openModal={openModal}
          setShowMenu={setShowMenu}
          setOpenModal={setOpenModal}
        />

        {/* Media */}
        <Mobile
          setOpenModal={setOpenModal}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      </div>
    </header>
  );
};
