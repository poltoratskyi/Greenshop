"use client";

import { useUIStore } from "../../../store";

import { svgSearch, svgBurgerMenu } from "./static-data";

import Logo from "../../shared/header/logo";

const Controls: React.FC = () => {
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setOpenBurger = useUIStore((state) => state.setOpenBurger);

  return (
    <>
      <span
        onClick={() => {
          window.scrollTo({
            top: 0,
          });

          setOpenBurger(true);
        }}
      >
        {svgBurgerMenu}
      </span>

      <Logo subtitle width="30" height="30" />

      <span onClick={() => setOpenSearch(true)}>{svgSearch}</span>
    </>
  );
};

export default Controls;
