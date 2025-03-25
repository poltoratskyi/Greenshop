"use client";

import Style from "./mobile-header.module.scss";
import { svgSearch, svgBurgerMenu } from "./static-data";
import { useUIStore } from "../../../store";
import Logo from "../logo";

const MobileHeader: React.FC = () => {
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);
  const setIsBurgerOpen = useUIStore((state) => state.setIsBurgerOpen);

  return (
    <div className={Style.header}>
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
    </div>
  );
};

export default MobileHeader;
