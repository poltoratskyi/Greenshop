"use client";

import { useUIStore } from "../../../store";
import { svgSearch, svgBurgerMenu } from "./static-data";
import Logo from "../header/logo";

const Controls: React.FC = () => {
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);
  const setIsBurgerOpen = useUIStore((state) => state.setIsBurgerOpen);

  return (
    <>
      <span
        onClick={() => {
          window.scrollTo({
            top: 0,
          });

          setIsBurgerOpen(true);
        }}
      >
        {svgBurgerMenu}
      </span>

      <Logo subtitle width="30" height="30" />

      <span onClick={() => setIsSearchOpen(true)}>{svgSearch}</span>
    </>
  );
};

export default Controls;
