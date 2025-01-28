"use client";

import Style from "./filter.module.scss";
import { useUIStore } from "../../../store";
import { filterMenu } from "../catalog/static-data";

const FilterMenu: React.FC = () => {
  const selectedSortLabel = useUIStore((state) => state.selectedSortLabel);
  const setSelectedSortLabel = useUIStore(
    (state) => state.setSelectedSortLabel
  );

  return (
    <div className={Style.timezone}>
      <ul className={Style.lists}>
        {filterMenu.map((item, index) => (
          <li className={Style.list} key={index}>
            <span
              className={
                selectedSortLabel === item.menu
                  ? `${Style.text} ${Style.active}`
                  : Style.text
              }
              onClick={() => setSelectedSortLabel(item.menu)}
            >
              {item.menu}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMenu;
