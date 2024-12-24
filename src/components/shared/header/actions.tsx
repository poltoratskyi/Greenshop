"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./header.module.scss";

import { useCartStore, useUIStore } from "../../../store";

import { svgCart, svgLogin, svgSearch } from "./static-data";
import ItemsList from "../../../components/ui/modal-mini-cart";
import Summary from "../../../components/ui/modal-mini-cart/summary";

const Actions: React.FC = () => {
  const pathname = usePathname();

  const cartItems = useCartStore((state) => state.cartItems);

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

      <div className={Style.cart_wrapper}>
        <Link
          className={
            pathname === "/cart" ? `${Style.cart} ${Style.active}` : Style.cart
          }
          href="/cart"
        >
          {cartItems.length > 0 && <span>{cartItems.length}</span>}

          {svgCart}
        </Link>

        <div className={Style.dropdown_cart}>
          <ItemsList />

          <Summary />
        </div>
      </div>

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
