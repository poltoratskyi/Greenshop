import Link from "next/link";

import Style from "./cart.module.scss";

import { CartList } from "./list";
import { CartTotals } from "./totals";
import { Slider } from "./slider";

const ways = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  { id: 2, name: "Shop", link: "#" },
  { id: 3, name: "Shopping Cart", link: "/cart" },
];

export const Cart = () => {
  return (
    <div className={Style.cart}>
      <div className="container">
        <ul className={Style.lists}>
          {ways.map((item) => (
            <li className={Style.list} key={item.id}>
              <Link href={item.link}>
                <span
                  className={
                    item.id === 1 ? `${Style.link} ${Style.active}` : Style.link
                  }
                >
                  {item.name}
                </span>
                /
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: "90px", marginBottom: "90px" }}>
          <CartList />

          <CartTotals />
        </div>
        <Slider />
      </div>
    </div>
  );
};
