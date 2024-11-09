"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Style from "./mobile-menu.module.scss";

import { useUIStore } from "../../../utils/store";

import { login, btn, pages } from "./static-data";

interface Element {
  menu: JSX.Element;
  href: string;
}
[];

const MobileMenu: React.FC = () => {
  const showMenu = useUIStore((state) => state.showMenu);
  const setShowMenu = useUIStore((state) => state.setShowMenu);
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  const pathname = usePathname();

  return (
    <nav className={!showMenu ? `${Style.menu} ${Style.active}` : Style.menu}>
      <ul className={Style.lists}>
        {pages.map((link: Element, index: number) => (
          <li
            key={index}
            className={
              pathname === link.href
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
          >
            <Link href={link.href}>
              {link.menu}

              {link.href === "/cart" && <span>9</span>}
            </Link>
          </li>
        ))}

        <Link href="/login">
          <li
            style={{
              pointerEvents: pathname === "/login" ? "none" : "auto",
            }}
            onClick={() => {
              setShowMenu(false);
              setOpenModal(true);
              document.body.style.overflow = "hidden";
            }}
            className={
              pathname === "/login"
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
          >
            {login}
          </li>
        </Link>
      </ul>

      <div
        onClick={() => setShowMenu(!showMenu)}
        className={!showMenu ? `${Style.btn} ${Style.active}` : Style.btn}
      >
        {btn}
      </div>
    </nav>
  );
};

export default MobileMenu;
