"use client";

import { useState } from "react";

import Style from "./catalog.module.scss";

import { Sort } from "../../../components/ui/sort";

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

interface Sort {
  menu: string;
}
[];

export const Filter: React.FC = () => {
  const [activeFilterMenu, setActiveFilterMenu] = useState("All Plants");

  return (
    <form className={Style.filter}>
      <ul className={Style.lists}>
        {filterMenu.map((item: Sort, index: number) => (
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

      <Sort />
    </form>
  );
};
