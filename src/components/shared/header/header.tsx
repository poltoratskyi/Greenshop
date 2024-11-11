"use client";
import Style from "./header.module.scss";

import Logo from "./logo";
import Links from "./links";
import Actions from "./actions";
import MobileHeader from "../../ui/mobile-header";
import MobileMenu from "../../ui/mobile-menu";
import DesktopInput from "../../../components/ui/desktop-input";
import Overlay from "../../../components/ui/overlay";
import TopInfo from "@/components/ui/mobile-header/top-info";

const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <TopInfo />

      <div className="container">
        <div className={Style.content}>
          <Logo />
          <Links />
          <Actions />

          <Overlay />
          <DesktopInput />
        </div>

        {/* Media */}
        <MobileHeader />
      </div>

      <MobileMenu />
    </header>
  );
};

export default Header;
