import Style from "./mobile-header.module.scss";
import BurgerMenu from "./burger-menu";
import Controls from "./controls";

const MobileHeader: React.FC = () => {
  return (
    <div className={Style.mobile_header}>
      <BurgerMenu />

      <Controls />
    </div>
  );
};

export default MobileHeader;
