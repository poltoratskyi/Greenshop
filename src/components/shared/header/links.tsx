"use client";

import React, { useState } from "react";

import Style from "./header.module.scss";

const pages = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Plant Care", href: "#" },
  { name: "Blogs", href: "#" },
];

export const Links: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const selectActiveMenu = (name: string) => {
    setActiveMenu(name);
  };

  return (
    <ul className={Style.lists}>
      {pages.map((item, index) => (
        <li className={Style.list} key={index}>
          <a
            className={
              activeMenu === item.name
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            onClick={() => selectActiveMenu(item.name)}
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
