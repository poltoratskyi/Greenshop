"use client";

import { useUIStore } from "@/store";
import Style from "./filter.module.scss";
import { svgFilter } from "./static-data";

const Filter: React.FC = () => {
  const setIsModalCategoryOpen = useUIStore(
    (state) => state.setIsModalCategoryOpen
  );

  return (
    <div className={Style.filter}>
      <button
        className={Style.button}
        onClick={() => setIsModalCategoryOpen(true)}
      >
        {svgFilter}
        <span className={Style.text}>Filters</span>
      </button>
    </div>
  );
};

export default Filter;
