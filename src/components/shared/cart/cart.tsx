import Style from "./cart.module.scss";

import CartList from "./list";
import CartCheck from "./check";
import Slider from "./slider";
import Backspace from "../backspace";

const Cart: React.FC = () => {
  return (
    <section className={Style.cart}>
      <div className="container">
        <Backspace text="Shopping Cart" />
        <div className={Style.inner}>
          <CartList />

          <CartCheck />
        </div>

        <Slider />
      </div>
    </section>
  );
};

export default Cart;
