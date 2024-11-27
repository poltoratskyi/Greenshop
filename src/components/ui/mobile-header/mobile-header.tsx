"use client";

import Style from "./mobile-header.module.scss";

import { svgSearch, svgBurgerMenu } from "./static-data";
import Logo from "../../shared/header/logo";

import { useUIStore } from "../../../utils/store";
import BurgerMenu from "./burger-menu";

const MobileHeader: React.FC = () => {
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setOpenBurger = useUIStore((state) => state.setOpenBurger);

  return (
    <div className={Style.mobile_header}>
      <BurgerMenu />

      <span
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setOpenBurger(true);
        }}
      >
        {svgBurgerMenu}
      </span>

      <Logo subtitle width="30" height="30" />

      <span onClick={() => setOpenSearch(true)}>{svgSearch}</span>
    </div>
  );
};

export default MobileHeader;
