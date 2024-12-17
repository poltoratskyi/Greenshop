"use client";

import { useRouter } from "next/navigation";

import Style from "./modal-category.module.scss";

import { svgClose } from "./static-data";

import { useUIStore } from "../../../store";

const Controls: React.FC = () => {
  const router = useRouter();

  const setOpenModalCategory = useUIStore(
    (state) => state.setOpenModalCategory
  );

  const closeModal = () => {
    router.back();
    setOpenModalCategory(false);
  };

  return (
    <span
      onClick={() => {
        closeModal();
      }}
      className={Style.close}
    >
      {svgClose}
    </span>
  );
};

export default Controls;
