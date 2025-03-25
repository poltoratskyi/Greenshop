"use client";

import Style from "./category-modal.module.scss";
import Category from "../../../shared/category";
import { useUIStore } from "../../../../store";
import { svgClose } from "./static-data";

const Modal: React.FC = () => {
  const isModalCategoryOpen = useUIStore((state) => state.isModalCategoryOpen);
  const setIsModalCategoryOpen = useUIStore(
    (state) => state.setIsModalCategoryOpen
  );

  return (
    <div
      className={`${
        isModalCategoryOpen
          ? `${Style.modal} ${Style.active}`
          : `${Style.modal}`
      }`}
    >
      <div className={Style.header}>
        <h2 className={Style.title}>Catalog Items</h2>

        <span
          onClick={() => setIsModalCategoryOpen(false)}
          className={Style.close}
        >
          {svgClose}
        </span>
      </div>

      <div className={Style.content}>
        <Category />
      </div>
    </div>
  );
};

export default Modal;
