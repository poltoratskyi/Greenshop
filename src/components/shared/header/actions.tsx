"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./header.module.scss";
import { useCartStore, useUIStore } from "../../../store";
import { svgCart, svgProfile, svgSearch, svgProfileIn } from "./static-data";
import MiniCart from "../../ui/cart/mini-cart";
import Summary from "../../ui/cart/mini-cart/summary";

const Actions: React.FC = () => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const cartItems = useCartStore((state) => state.cartItems);

  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);

  return (
    <div className={Style.actions}>
      <span
        className={Style.search}
        onClick={() => {
          window.scrollTo({
            top: 0,
          });

          setIsSearchOpen(true);
        }}
      >
        {svgSearch}
      </span>

      <div className={Style.cartWrapper}>
        <Link
          className={
            pathname === "/cart" ? `${Style.cart} ${Style.active}` : Style.cart
          }
          href="/cart"
        >
          {cartItems.length > 0 && <span>{cartItems.length}</span>}

          {svgCart}
        </Link>

        <div className={Style.dropdownCart}>
          <MiniCart />

          <Summary />
        </div>
      </div>

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
              ? `${Style.link} ${Style.login}`
              : status === "authenticated"
                ? `${Style.link} ${Style.authenticated}`
                : Style.link
          }
          href="/profile"
        >
          {svgProfileIn}
        </Link>
      )}
    </div>
  );
};

export default Actions;
