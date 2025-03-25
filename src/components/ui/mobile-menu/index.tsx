"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./mobile-menu.module.scss";
import { useCartStore, useUIStore } from "../../../store";
import {
  svgCart,
  svgCategory,
  svgHeart,
  svgHome,
  svgProfile,
  svgProfileIn,
} from "./static-data";
import { useSession } from "next-auth/react";

const MobileMenu: React.FC = () => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const cartItems = useCartStore((state) => state.cartItems);

  const isModalCategoryOpen = useUIStore((state) => state.isModalCategoryOpen);
  const setIsModalCategoryOpen = useUIStore(
    (state) => state.setIsModalCategoryOpen
  );

  return (
    <nav className={Style.menu}>
      <ul className={Style.lists}>
        <li className={Style.list}>
          <Link
            className={
              pathname === "/" ? `${Style.link} ${Style.active}` : Style.link
            }
            href="/"
          >
            {svgHome}
          </Link>
        </li>

        <li onClick={() => setIsModalCategoryOpen(true)} className={Style.list}>
          <span
            className={
              isModalCategoryOpen
                ? `${Style.category} ${Style.active}`
                : Style.category
            }
          >
            {svgCategory}
          </span>
        </li>

        <li className={Style.list}>
          {!session ? (
            <Link
              className={
                pathname === "/login"
                  ? `${Style.link} ${Style.active}`
                  : status === "loading"
                  ? `${Style.link} ${Style.loading}`
                  : Style.link
              }
              href="/login"
            >
              {svgHeart}
            </Link>
          ) : (
            <Link
              className={
                pathname === "/profile"
                  ? `${Style.link} ${Style.active}`
                  : status === "authenticated"
                  ? `${Style.link} ${Style.authenticated}`
                  : Style.link
              }
              href="/profile"
            >
              {svgHeart}
            </Link>
          )}
        </li>

        <li className={Style.list}>
          <Link
            className={
              pathname === "/cart"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/cart"
          >
            {cartItems.length > 0 && <span>{cartItems.length}</span>}

            {svgCart}
          </Link>
        </li>

        <li className={Style.list}>
          {!session ? (
            <Link
              className={
                pathname === "/login"
                  ? `${Style.link} ${Style.active}`
                  : status === "loading"
                  ? `${Style.link} ${Style.loading}`
                  : Style.link
              }
              href="/login"
            >
              {svgProfile}
            </Link>
          ) : (
            <Link
              className={
                pathname === "/profile"
                  ? `${Style.link} ${Style.active}`
                  : status === "authenticated"
                  ? `${Style.link} ${Style.authenticated}`
                  : Style.link
              }
              href="/profile"
            >
              {svgProfileIn}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
