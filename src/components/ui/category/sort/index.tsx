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

  return (
    <div className={Style.sort}>
      <div className={Style.content}>
        <span className={Style.descr}>
          Sort by: <span>{sortBy}</span>
        </span>

        <div ref={ref}>
          <span onClick={() => setIsSortOpen(!sort)}>{svgRound}</span>

          <ul className={sort ? `${Style.active} ${Style.lists}` : Style.lists}>
            {filterSort.map((item) => (
              <li
                className={
                  sortBy === item.value
                    ? `${Style.list} ${Style.active}`
                    : Style.list
                }
                onClick={() => handleSort(item)}
                key={item.id}
              >
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sort;
