"use client";

import React, { useState } from "react";

import Style from "./header.module.scss";

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
    <ul className={Style.lists}>
      {pages.map((item, index) => (
        <li className={Style.list} key={index}>
          <a
            className={
              activeMenu === item.menu
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            onClick={() => selectActiveMenu(item.menu)}
            href={item.href}
          >
            {item.menu}
          </a>
        </li>
      ))}
    </ul>
  );
};
