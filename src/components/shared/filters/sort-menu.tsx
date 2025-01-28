"use client";

import { useRef } from "react";
import { useClickAway } from "react-use";
import Style from "./filter.module.scss";
import { useUIStore } from "../../../store";
import { filterSort, svgRound } from "./static-data";

const SortMenu: React.FC = () => {
  const sort = useUIStore((state) => state.isSortOpen);
  const setIsSortOpen = useUIStore((state) => state.setIsSortOpen);
  const selectedSortOption = useUIStore((state) => state.selectedSortOption);
  const setSelectedSortOption = useUIStore(
    (state) => state.setSelectedSortOption
  );

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setIsSortOpen(false);
  });

  return (
    <div className={Style.sort}>
      <span className={Style.descr}>
        Sort by: <span>{selectedSortOption}</span>
      </span>

      <div ref={ref}>
        <span onClick={() => setIsSortOpen(!sort)}>{svgRound}</span>

        <ul className={sort ? `${Style.active} ${Style.lists}` : Style.lists}>
          {filterSort.map((item, index) => (
            <li
              className={
                selectedSortOption === item.label
                  ? `${Style.list} ${Style.active}`
                  : Style.list
              }
              onClick={() => {
                setSelectedSortOption(item.label);
                setIsSortOpen(false);
              }}
              key={index}
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortMenu;
