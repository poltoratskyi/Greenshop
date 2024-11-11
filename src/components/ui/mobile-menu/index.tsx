"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Style from "./mobile-menu.module.scss";

import { useUIStore } from "../../../utils/store";

import { login, /* btn, */ pages } from "./static-data";

interface Element {
  menu: JSX.Element;
  href: string;
}
[];

const MobileMenu: React.FC = () => {
  const showMenu = useUIStore((state) => state.showMenu);
  /* const setShowMenu = useUIStore((state) => state.setShowMenu); */
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={!showMenu ? `${Style.menu} ${Style.active}` : Style.menu}>
      <ul className={Style.lists}>
        {pages.map((link: Element, index: number) => (
          <li
            key={index}
            onClick={() => {
              if (link.href === "/login") {
                // setShowMenu(false);
                setOpenModal(true);
                document.body.style.overflow = "hidden";
              }
            }}
            className={
              pathname === link.href
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
            style={{
              pointerEvents:
                pathname === "/login" && link.href === "/login"
                  ? "none"
                  : "auto",
              opacity:
                pathname === "/login" && link.href === "/login" ? 0.5 : 1,
            }}
          >
            <Link href={link.href}>
              {link.menu}

              {link.href === "/cart" && <span>9</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div
        onClick={() => setShowMenu(!showMenu)}
        className={!showMenu ? `${Style.btn} ${Style.active}` : Style.btn}
      >
        {btn}
      </div> */}
    </nav>
  );
};

export default MobileMenu;
