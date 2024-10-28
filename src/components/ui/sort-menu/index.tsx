"use client";

import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import Style from "./sort.module.scss";

import { useUIStore } from "../../../utils/store";

import { filterSort, svgRound } from "./static-data";

interface Filter {
  value: string;
  label: string;
}
[];

const Sort: React.FC = () => {
  const sortMenu = useUIStore((state) => state.sortMenu);
  const setOpenSort = useUIStore((state) => state.setOpenSort);

  const [activeSortMenu, setActiveSortMenu] = useState("name");
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setOpenSort(false);
  });

  return (
    <div ref={ref} className={Style.sort}>
      <span className={Style.descr}>
        Sort by: <span>{activeSortMenu}</span>
      </span>

      <span onClick={() => setOpenSort(true)}>{svgRound}</span>

      <ul
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

export default Sort;
