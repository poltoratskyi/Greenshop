"use client";
import Style from "./header.module.scss";

import Logo from "./logo";
import Links from "./links";
import Actions from "./actions";
import MobileInput from "../../ui/mobile-input";
import MobileMenu from "../../ui/mobile-menu";
import DesktopInput from "../../../components/ui/desktop-input";
import Overlay from "../../../components/ui/overlay";

const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className="container">
        <div className={Style.content}>
          <Logo />
          <Links />
          <Actions />
        </div>

        <Overlay />
        <DesktopInput />

        {/* Media */}
        <MobileInput />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
