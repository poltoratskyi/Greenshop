"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./mobile-menu.module.scss";
import { useCartStore, useUIStore } from "../../../store";
import { pages } from "./static-data";

const MobileMenu: React.FC = () => {
  const pathname = usePathname();

  const cartItems = useCartStore((state) => state.cartItems);

  const setIsModalOpen = useUIStore((state) => state.setIsModalOpen);
  const setIsModalCategoryOpen = useUIStore(
    (state) => state.setIsModalCategoryOpen
  );

  return (
    <nav className={Style.menu}>
      <ul className={Style.lists}>
        {pages.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              if (link.href === "/login") {
                setIsModalOpen(true);
              } else if (link.href === "/category") {
                setIsModalCategoryOpen(true);
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
              {link.href === "/cart" && cartItems.length > 0 && (
                <span>{cartItems.length}</span>
              )}

              {link.menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
