"use client";

import Style from "./overlay.module.scss";

import { useUIStore } from "../../../utils/store";

const Overlay: React.FC = () => {
  const openSearch = useUIStore((state) => state.openSearch);

  return (
    <div
      className={
        openSearch ? `${Style.overlay} ${Style.active}` : Style.overlay
      }
    ></div>
  );
};

export default Overlay;
