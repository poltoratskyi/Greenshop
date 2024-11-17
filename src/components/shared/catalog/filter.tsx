"use client";

import Style from "./catalog.module.scss";

import Sort from "../../../components/ui/sort-menu";

import { filterMenu } from "./static-data";

import { useUIStore } from "../../../utils/store";

interface Sort {
  menu: string;
}
[];

const Filter: React.FC = () => {
  const activeSortValue = useUIStore((state) => state.activeSortValue);
  const setActiveSortValue = useUIStore((state) => state.setActiveSortValue);

  return (
    <form className={Style.filter}>
      <ul className={Style.lists}>
        {filterMenu.map((item: Sort, index: number) => (
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

      <Sort />
    </form>
  );
};

export default Filter;
