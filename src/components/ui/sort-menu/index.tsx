"use client";

import Link from "next/link";
import { useRef } from "react";
import { useClickAway } from "react-use";

import Style from "./sort.module.scss";

import { useUIStore } from "../../../store";

import { filterSort, svgRound } from "./static-data";

const Sort: React.FC = () => {
  const sort = useUIStore((state) => state.sort);
  const setOpenSort = useUIStore((state) => state.setOpenSort);
  const activeSortMenuValue = useUIStore((state) => state.activeSortMenuValue);
  const setActiveSortMenuValue = useUIStore(
    (state) => state.setActiveSortMenuValue
  );

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setOpenSort(false);
  });

  return (
    <div className={Style.sort}>
      <span className={Style.descr}>
        Sort by: <span>{activeSortMenuValue}</span>
      </span>

      <div ref={ref}>
        <span onClick={() => setOpenSort(!sort)}>{svgRound}</span>

        <ul
          className={
            sort ? `${Style.active} ${Style.sortLists}` : Style.sortLists
          }
        >
          {filterSort.map((item, index) => (
            <li
              className={
                activeSortMenuValue === item.label
                  ? `${Style.sortList} ${Style.active}`
                  : Style.sortList
              }
              onClick={() => {
                setActiveSortMenuValue(item.label);
                setOpenSort(false);
              }}
              key={index}
            >
              <Link href={`/catalog/${item.value}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
