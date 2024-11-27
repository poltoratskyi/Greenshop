"use client";

import { useRouter } from "next/navigation";

import Style from "./modal-categories.module.scss";

import { svgClose } from "./static-data";

import { useUIStore } from "../../../utils/store";

import Categories from "../../../components/shared/catalog/categories";

const ModalCategories: React.FC = () => {
  const router = useRouter();

  const setOpenModalCategories = useUIStore(
    (state) => state.setOpenModalCategories
  );

  const closeModal = () => {
    router.back();
    setOpenModalCategories(false);
  };

  return (
    <div>
      <div className={Style.modal_categories}>
        <div className={Style.header}>
          <h2 className={Style.title}>Catalog Items</h2>

          <span
            onClick={() => {
              closeModal();
            }}
            className={Style.close}
          >
            {svgClose}
          </span>
        </div>

        <div className={Style.content}>
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default ModalCategories;
