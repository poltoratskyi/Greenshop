"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./header.module.scss";
import { useCartStore, useUIStore, useWishlistStore } from "../../../store";
import {
  svgCart,
  svgProfile,
  svgSearch,
  svgProfileIn,
  svgHeart,
} from "./static-data";
import MiniCart from "../../ui/cart/mini-cart";
import Summary from "../../ui/cart/mini-cart/summary";
import { useEffect } from "react";

const Actions: React.FC = () => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const cartItems = useCartStore((state) => state.cartItems);

  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);
  const isLoading = useUIStore((state) => state.isLoading);

  const wishlist = useWishlistStore((state) => state.wishlistItems);
  const loadUserWishlist = useWishlistStore((state) => state.loadUserWishlist);

  useEffect(() => {
    if (status === "authenticated" || isLoading === true) {
      loadUserWishlist();
    }
  }, [status, isLoading === true]);

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

      {session && (
        <Link
          className={
            pathname === "/profile/wishlist"
              ? `${Style.link} ${Style.active}`
              : Style.link
          }
          href="/profile/wishlist"
        >
          {wishlist.length > 0 && <span>{wishlist.length}</span>}

          {svgHeart}
        </Link>
      )}

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
