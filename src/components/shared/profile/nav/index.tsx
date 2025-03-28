"use client";

import { signOut } from "next-auth/react";
import Style from "./nav.module.scss";
import {
  svgCart,
  svgHeart,
  svgMap,
  svgProfile,
  svgProfileOut,
  svgSupport,
} from "./static-data";
import { useState } from "react";
import Button from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogOut = () => {
    setIsLoading(true);

    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <nav className={Style.nav}>
      <ul className={Style.lists}>
        <li className={Style.list}>
          <Link
            className={
              pathname === "/profile"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/profile"
          >
            {svgProfile} <span className={Style.text}>Account Details</span>
          </Link>
        </li>

        <li className={Style.list}>
          <Link
            className={
              pathname === "/profile/address"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/profile/address"
          >
            {svgMap} <span className={Style.text}>Address</span>
          </Link>
        </li>

        <li className={Style.list}>
          <Link
            className={
              pathname === "/profile/orders"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/profile/orders"
          >
            {svgCart} <span className={Style.text}>Orders</span>
          </Link>
        </li>

        <li className={Style.list}>
          <Link
            className={
              pathname === "/profile/wishlist"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/profile/wishlist"
          >
            {svgHeart} <span className={Style.text}>Wishlist</span>
          </Link>
        </li>

        <li className={Style.list}>
          <Link
            className={
              pathname === "/profile/support"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/profile/support"
          >
            {svgSupport} <span className={Style.text}>Support</span>
          </Link>
        </li>
      </ul>

      <span className={Style.line}></span>

      <Button
        isLoading={isLoading}
        onClick={onClickLogOut}
        type="button"
        className="logOut"
        value="Log out"
        svgLeft={svgProfileOut}
      />
    </nav>
  );
};

export default Nav;
