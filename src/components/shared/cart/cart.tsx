import Link from "next/link";

import Style from "./cart.module.scss";

import CartList from "./list";
import CartCheck from "./check";
import { svgBackspace } from "./static-data";

const Cart: React.FC = () => {
  return (
    <section className={Style.cart}>
      <div className={Style.backspace}>
        <Link href="/">{svgBackspace}</Link>

        <h2>Shopping Cart</h2>
      </div>

      <div className="container">
        <div className={Style.inner}>
          <CartList />

          <CartCheck />
        </div>
      </div>
    </section>
  );
};

export default Cart;
