"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./mobile-menu.module.scss";

import { useUIStore } from "../../../utils/store";

import { pages } from "./static-data";

const MobileMenu: React.FC = () => {
  const pathname = usePathname();

  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const setOpenModalCategories = useUIStore(
    (state) => state.setOpenModalCategories
  );

  return (
    <nav className={Style.menu}>
      <ul className={Style.lists}>
        {pages.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              if (link.href === "/login") {
                setOpenModal(true);
              } else if (link.href === "/categories") {
                setOpenModalCategories(true);
              }
            }}
            className={
              pathname === link.href
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
            style={{
              pointerEvents: pathname === link.href ? "none" : "auto",
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
