"use client";

import { useRef, useState } from "react";

import { useClickAway } from "react-use";

import Style from "./sort.module.scss";

import { useUIStore } from "../../../utils/store";

const filterSort = [
  { value: "name", label: "name" },
  { value: "popularity", label: "popularity" },
  { value: "date", label: "date" },
  { value: "price", label: "from low to high" },
  { value: "-price", label: "from high to low" },
];

interface Filter {
  value: string;
  label: string;
}
[];

export const Sort = () => {
  const sortMenu = useUIStore((state) => state.sortMenu);
  const setOpenSort = useUIStore((state) => state.setOpenSort);

  const [activeSortMenu, setActiveSortMenu] = useState("name");
  const ref = useRef<HTMLUListElement>(null);

  useClickAway(ref, () => {
    setOpenSort(false);
  });

  return (
    <div className={Style.sort}>
      <span className={Style.descr}>
        Sort by: <span>{activeSortMenu}</span>
      </span>

      <svg
        onClick={() => setOpenSort(!sortMenu)}
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
        ref={ref}
        className={
          sortMenu ? `${Style.active} ${Style.sortLists}` : Style.sortLists
        }
      >
        {filterSort.map((item: Filter, index: number) => (
          <li
            className={
              activeSortMenu === item.label
                ? `${Style.sortList} ${Style.active}`
                : Style.sortList
            }
            onClick={() => {
              setActiveSortMenu(item.label);
              setOpenSort(false);
            }}
            key={index}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
