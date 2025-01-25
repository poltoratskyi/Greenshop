import Style from "./header.module.scss";
import Logo from "./logo";
import Links from "./links";
import Actions from "./actions";
import MobileHeader from "../../ui/mobile-header/mobile-header";
import MobileMenu from "../../ui/mobile-menu";
import SearchItemsInput from "../../ui/search-items-input";
import SaleBanner from "../../ui/mobile-header/sale-banner";

const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <SaleBanner />

      <div className="container">
        <div className={Style.content}>
          <Logo />
          <Links />
          <Actions />
        </div>

        <SearchItemsInput />

        <MobileHeader />
      </div>

      <MobileMenu />
    </header>
  );
};

export default Header;
