"use client";

import { signOut } from "next-auth/react";
import Style from "./nav.module.scss";
import { svgProfileOut, navigation } from "./static-data";
import { useState } from "react";
import Button from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogOut = () => {
    setIsLoading(true);
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className={Style.nav}>
      <ul className={Style.lists}>
        {navigation.map(({ href, svg, text }) => {
          const isActive = pathname === href;

          return (
            <li
              key={href}
              className={
                isActive ? `${Style.list} ${Style.active}` : Style.list
              }
            >
              <Link className={Style.link} href={href}>
                {svg} <span className={Style.text}>{text}</span>
              </Link>
            </li>
          );
        })}
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
