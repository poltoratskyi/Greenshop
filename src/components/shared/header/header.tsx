import Style from "./header.module.scss";
import Logo from "./logo";
import Links from "./links";
import Actions from "./actions";
import MobileHeader from "../mobile-header/mobile-header";
import MobileMenu from "../mobile-menu";
import SearchBar from "../../ui/search-bar";
import SaleBanner from "../mobile-header/sale-banner";

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

        <SearchBar />

        <MobileHeader />
      </div>

      <MobileMenu />
    </header>
  );
};

export default Header;
