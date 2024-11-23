"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./mobile-menu.module.scss";

import { useSearchStore, useUIStore } from "../../../utils/store";

import { /* btn, */ pages } from "./static-data";

const MobileMenu: React.FC = () => {
  const pathname = usePathname();

  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const setOpenModalCatalog = useUIStore((state) => state.setOpenModalCatalog);

  const results = useSearchStore((state) => state.results);

  return (
    <nav
      className={
        results.length > 0 ? `${Style.menu} ${Style.active}` : Style.menu
      }
    >
      <ul className={Style.lists}>
        {pages.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              if (link.href === "/login") {
                setOpenModal(true);
              } else if (link.href === "/catalog") {
                setOpenModalCatalog(true);
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
    </nav>
  );
};

export default MobileMenu;
