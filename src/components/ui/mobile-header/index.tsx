"use client";

import Style from "./mobile-header.module.scss";

import { svgSearch, svgBurgerMenu } from "./static-data";
import Logo from "../../../components/shared/header/logo";

import { useUIStore } from "../../../utils/store";

const MobileHeader: React.FC = () => {
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);

  return (
    <div className={Style.mobile_header}>
      <span className={Style.burger}>{svgBurgerMenu}</span>

      <Logo subtitle width="30" height="30" />

      <span className={Style.search} onClick={() => setOpenSearch(true)}>
        {svgSearch}
      </span>
    </div>
  );
};

export default MobileHeader;
