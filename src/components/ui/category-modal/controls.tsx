"use client";

import { useRouter } from "next/navigation";

import Style from "./category-modal.module.scss";

import { svgClose } from "./static-data";

import { useUIStore } from "../../../store";

const Controls: React.FC = () => {
  const router = useRouter();

  const setIsModalCategoryOpen = useUIStore(
    (state) => state.setIsModalCategoryOpen
  );

  const closeModal = () => {
    router.back();
    setIsModalCategoryOpen(false);
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
