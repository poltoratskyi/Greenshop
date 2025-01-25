"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./header.module.scss";
import { pages } from "./static-data";

interface Item {
  menu: string;
  href: string;
}
[];

const Links: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={Style.lists}>
        {pages.map((item: Item, index: number) => (
          <li className={Style.list} key={index}>
            <Link
              className={
                pathname === item.href
                  ? `${Style.link} ${Style.active}`
                  : Style.link
              }
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

export default Links;
