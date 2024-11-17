"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Style from "./mobile-header.module.scss";

import TopInfo from "./top-info";
import Logo from "../../../components/shared/header/logo";
import Contacts from "../../../components/shared/footer/contacts";
import Accept from "../../../components/shared/footer/accept";

import { useUIStore } from "../../../utils/store";

import { svgLogin, svgClose, links } from "./static-data";

const BurgerMenu: React.FC = () => {
  const pathname = usePathname();

  const burger = useUIStore((state) => state.burger);
  const setOpenBurger = useUIStore((state) => state.setOpenBurger);
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  return (
    <div
      className={`${
        burger ? `${Style.burger} ${Style.visible}` : Style.burger
      }`}
    >
      <div className={Style.content}>
        <TopInfo />

        <div className={Style.header}>
          <Logo subtitle />

          <span onClick={() => setOpenBurger(false)}>{svgClose}</span>
        </div>

        <Link href="#" className={Style.sale}>
          <p className={Style.text}>
            Summer <b>sale</b> <br /> up to <b>20% off!</b>
          </p>
        </Link>

        <div className={Style.menu}>
          <ul className={Style.lists}>
            {links.map((link, index) => (
              <li key={index} className={Style.list}>
                <Link className={Style.link} href={link.href}>
                  {link.svg} {link.menu}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            style={{
              pointerEvents: pathname === "/login" ? "none" : "auto",
              opacity: pathname === "/login" ? 0.5 : 1,
            }}
            onClick={() => {
              setOpenBurger(false);
              setOpenModal(true);
            }}
            className={Style.login}
            href="/login"
          >
            {svgLogin}
            Log In
          </Link>

          <Contacts burger_menu />

          <Accept burger_menu />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
