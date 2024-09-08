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

interface Item {
  id: number;
  name: string;
  link: string;
}
[];

export const Cart = () => {
  return (
    <section className={Style.cart}>
      <div className="container">
        <ul className={Style.lists}>
          {ways.map((item: Item) => (
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

        <div className={Style.inner}>
          <CartList />

          <CartTotals />
        </div>
        <Slider />
      </div>
    </section>
  );
};
