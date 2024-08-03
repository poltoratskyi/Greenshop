"use client";

import { useState } from "react";

import Style from "./catalog.module.scss";

const filterMenu = [
  {
    menu: "All Plants",
  },
  {
    menu: "New Arrivals",
  },
  {
    menu: "Available",
  },
];

const filterSort = [
  { value: "name", label: "name" },
  { value: "popularity", label: "popularity" },
  { value: "date", label: "date" },
  { value: "price", label: "from low to high" },
  { value: "-price", label: "from high to low" },
];

export const Filter = () => {
  const [shopSortMenu, setShopSortMenu] = useState(false);
  const [activeFilterMenu, setActiveFilterMenu] = useState("All Plants");
  const [activeSortMenu, setActiveSortMenu] = useState("name");

  return (
    <form className={Style.filter}>
      <ul className={Style.lists}>
        {filterMenu.map((item, index) => (
          <li className={Style.list} key={index}>
            <span
              className={
                activeFilterMenu === item.menu
                  ? `${Style.text} ${Style.active}`
                  : Style.text
              }
              onClick={() => setActiveFilterMenu(item.menu)}
            >
              {item.menu}
            </span>
          </li>
        ))}
      </ul>

      <div className={Style.sort}>
        <span className={Style.descr}>
          Short by: <span>{activeSortMenu}</span>
        </span>

        <svg
          onClick={() => setShopSortMenu(!shopSortMenu)}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6666 5.66667L7.99998 10.3333L3.33331 5.66667"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <ul
          className={
            shopSortMenu
              ? `${Style.active} ${Style.sortLists}`
              : Style.sortLists
          }
        >
          {filterSort.map((item, index) => (
            <li
              className={
                activeSortMenu === item.label
                  ? `${Style.sortList} ${Style.active}`
                  : Style.sortList
              }
              onClick={() => {
                setActiveSortMenu(item.label);
                setShopSortMenu(false);
              }}
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};
