import Style from "./header.module.scss";
import Logo from "../../ui/logo";
import Links from "./links";
import Actions from "./actions";
import MobileHeader from "../../ui/mobile-header";
import SearchBar from "../../ui/search-bar";
import MobileMenu from "../../../components/ui/mobile-menu";
import Burger from "../../../components/ui/burger";

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

        <Burger />

        <MobileHeader />

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
