"use client";

import Style from "./overlay.module.scss";

import { useUIStore } from "../../../utils/store";

export const Overlay: React.FC = () => {
  const openSearch = useUIStore((state) => state.openSearch);
  const openModal = useUIStore((state) => state.openModal);

  const isOverlayVisible = openSearch || openModal;

  return (
    <div
      className={
        isOverlayVisible ? `${Style.overlay} ${Style.active}` : Style.overlay
      }
    ></div>
  );
};
