"use client";

import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import Style from "./sort.module.scss";
import { useUIStore } from "../../../../store";
import { filterSort, svgRound } from "./static-data";
import { useSearchParams } from "next/navigation";

const Sort: React.FC = () => {
  const searchParams = useSearchParams();

  const sortByParams = searchParams.get("sort");

  const [sortBy, setSortBy] = useState(sortByParams);

  useEffect(() => {
    if (sortByParams) {
      setSortBy(sortByParams);
    }
  }, [sortByParams]);

  const sort = useUIStore((state) => state.isSortOpen);

  const setIsSortOpen = useUIStore((state) => state.setIsSortOpen);
  const setSelectedSortLabel = useUIStore(
    (state) => state.setSelectedSortLabel
  );
  const setSelectedSortOption = useUIStore(
    (state) => state.setSelectedSortOption
  );

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setIsSortOpen(false);
  });

  const handleSort = (item: { value: string; sort: string; label: string }) => {
    setSortBy(item.value);
    setSelectedSortOption(item.sort);
    setSelectedSortLabel(item.label);
    setIsSortOpen(false);
  };

  const sortByValue = sortBy ? sortBy : "data";

  return (
    <div
      onClick={() => setIsSortOpen(!sort)}
      ref={ref}
      className={sort ? `${Style.sort} ${Style.active}` : Style.sort}
    >
      <div className={Style.content}>
        <div className={Style.descr}>
          Sort by:
          <span>{" " + sortByValue}</span>
        </div>

        {svgRound}

        <ul className={sort ? `${Style.active} ${Style.lists}` : Style.lists}>
          {filterSort.map((item) => (
            <li
              className={Style.list}
              onClick={() => handleSort(item)}
              key={item.id}
            >
              <span
                className={
                  item.value === sortByValue
                    ? `${Style.text} ${Style.active}`
                    : Style.text
                }
              >
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
