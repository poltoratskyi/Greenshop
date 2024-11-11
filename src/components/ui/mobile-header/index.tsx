import Style from "./mobile-header.module.scss";

import { svgSearch, svgBurgerMenu } from "./static-data";
import Logo from "../../../components/shared/header/logo";

const MobileHeader: React.FC = () => {
  return (
    <div className={Style.mobile_header}>
      <span className={Style.burger}>{svgBurgerMenu}</span>

      <Logo subtitle width="30" height="30" />

      <span className={Style.search}>{svgSearch}</span>
    </div>
  );
};

export default MobileHeader;
