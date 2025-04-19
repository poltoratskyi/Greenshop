"use client";

import { useUIStore } from "@/store";
import Style from "./category.module.scss";
import { svgClose } from "./static-data";

const MobileHeader: React.FC = () => {
  const setIsModalCategoryOpen = useUIStore(
    (state) => state.setIsModalCategoryOpen
  );

  return (
    <div className={Style.header}>
      <h2 className={Style.title}>Catalog Items</h2>

      <span
        onClick={() => setIsModalCategoryOpen(false)}
        className={Style.close}
      >
        {svgClose}
      </span>
    </div>
  );
};

export default MobileHeader;
