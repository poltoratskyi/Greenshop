"use client";

import Style from "./catalog.module.scss";

import { useUIStore } from "../../../store";

import { filterMenu } from "./static-data";

const FilterList: React.FC = () => {
  const activeSortValue = useUIStore((state) => state.activeSortValue);
  const setActiveSortValue = useUIStore((state) => state.setActiveSortValue);

  return (
    <ul className={Style.lists}>
      {filterMenu.map((item, index) => (
        <li className={Style.list} key={index}>
          <span
            className={
              activeSortValue === item.menu
                ? `${Style.text} ${Style.active}`
                : Style.text
            }
            onClick={() => setActiveSortValue(item.menu)}
          >
            {item.menu}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
