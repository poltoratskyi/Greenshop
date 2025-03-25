"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Style from "./burger.module.scss";
import Logo from "../../ui/logo";
import Contacts from "../../shared/footer/contacts";
import Accept from "../../shared/footer/accept";
import { useUIStore } from "../../../store";
import { svgLogin, svgClose, links } from "./static-data";

const Burger: React.FC = () => {
  const pathname = usePathname();

  const isBurgerOpen = useUIStore((state) => state.isBurgerOpen);
  const setIsBurgerOpen = useUIStore((state) => state.setIsBurgerOpen);

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
      <div className={Style.header}>
        <Logo subtitle />

        <span className={Style.close} onClick={() => setIsBurgerOpen(false)}>
          {svgClose}
        </span>
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
          className={
            pathname === "/login"
              ? `${Style.login} ${Style.active}`
              : Style.login
          }
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

export default Burger;
