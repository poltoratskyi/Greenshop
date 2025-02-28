import Style from "./header.module.scss";
import Logo from "../../ui/logo";
import Links from "./links";
import Actions from "./actions";
import MobileHeader from "../mobile-header/mobile-header";
import MobileMenu from "../../ui/mobile-menu";
import SearchBar from "../../ui/search-bar";

const Header: React.FC = () => {
  return (
    <header className={Style.header}>
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
