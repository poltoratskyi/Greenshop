"use client";

import React, { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";

import { axiosItem } from "../../../service/search";

import { Item } from "../../../types";

import Style from "./header.module.scss";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Overlay } from "../../ui/overlay";

const svgLeft = (
  <svg id="login" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M18.1601 10.1006H8.12598"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const svgSearch = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#A5A5A5">
    <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" />
  </svg>
);

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

export const Actions: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  const [openSearch, setOpenSearch] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setOpenSearch(false);
    document.body.style.overflow = "";
  });

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();

    setInputValue(value);
  };

  return (
    <>
      {openSearch && <Overlay visible={openSearch} />}

      <div ref={ref} className={Style.actions}>
        {openSearch && (
          <Input
            location="search"
            inputPlaceholder="Find your plants"
            searchResults={searchResults}
            inputValue={inputValue}
            svgSearch={svgSearch}
            svgClose={svgClose}
            handleSearch={handleSearch}
            setOpenSearch={setOpenSearch}
          />
        )}

        <svg
          onClick={() => {
            setOpenSearch(true);
            document.body.style.overflow = "hidden";
          }}
          data-type="search"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#3D3D3D"
        >
          <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" />
        </svg>

        <Link href="/cart">
          <svg
            data-type="cart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#3D3D3D"
          >
            <path d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975776 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30201 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z" />
          </svg>
        </Link>

        <Button
          button={true}
          className="login"
          value="Login"
          svgLeft={svgLeft}
        />
      </div>
    </>
  );
};
