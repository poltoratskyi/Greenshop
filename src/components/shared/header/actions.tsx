"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./header.module.scss";

import { useUIStore } from "../../../store";

import { svgCart, svgLogin, svgSearch } from "./static-data";

const Actions: React.FC = () => {
  const pathname = usePathname();

  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);

  return (
    <div className={Style.actions}>
      <span
        className={Style.search}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setOpenSearch(true);
        }}
      >
        {svgSearch}
      </span>

      <Link
        className={
          pathname === "/cart" ? `${Style.cart} ${Style.active}` : Style.cart
        }
        href="/cart"
      >
        {svgCart}
      </Link>

      <Link
        style={{
          pointerEvents: pathname === "/login" ? "none" : "auto",
          opacity: pathname === "/login" ? 0.5 : 1,
        }}
        onClick={() => {
          setOpenModal(true);
        }}
        className={Style.login}
        href="/login"
      >
        {svgLogin}
        Log In
      </Link>
    </div>
  );
};

export default Actions;
