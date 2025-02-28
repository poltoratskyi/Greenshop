"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Style from "./mobile-header.module.scss";
import Logo from "../../ui/logo";
import Contacts from "../footer/contacts";
import Accept from "../footer/accept";
import { useUIStore } from "../../../store";
import { svgLogin, svgClose, links } from "./static-data";

const BurgerMenu: React.FC = () => {
  const pathname = usePathname();

  const isBurgerOpen = useUIStore((state) => state.isBurgerOpen);
  const setIsBurgerOpen = useUIStore((state) => state.setIsBurgerOpen);
  const setIsModalOpen = useUIStore((state) => state.setIsModalOpen);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBurgerOpen]);

  return (
    <div
      className={`${
        isBurgerOpen ? `${Style.burger} ${Style.visible}` : Style.burger
      }`}
    >
      <div className={`${Style.mobile_header} ${Style.burger_header}`}>
        <Logo subtitle />

        <span onClick={() => setIsBurgerOpen(false)}>{svgClose}</span>
      </div>

      <Image
        width={600}
        height={600}
        priority
        style={{
          width: "100%",
          height: "auto",
          objectFit: "none",
        }}
        src="/header/menu-mobile/adv-min.png"
        alt="burger"
      />

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
            setIsBurgerOpen(false);
            setIsModalOpen(true);
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
  );
};

export default BurgerMenu;
