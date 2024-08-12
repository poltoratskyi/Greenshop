"use client";

import React, { useState } from "react";

import Style from "./header.module.scss";
import Link from "next/link";

const pages = [
  { menu: "Home", href: "#" },
  { menu: "Shop", href: "#" },
  { menu: "Plant Care", href: "#" },
  { menu: "Blogs", href: "#" },
];

export const Links: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const selectActiveMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <nav>
      <ul className={Style.lists}>
        {pages.map((item, index) => (
          <li className={Style.list} key={index}>
            <Link
              className={
                activeMenu === item.menu
                  ? `${Style.link} ${Style.active}`
                  : Style.link
              }
              onClick={() => selectActiveMenu(item.menu)}
              href={item.href}
            >
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
