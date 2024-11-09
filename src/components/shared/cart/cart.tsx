import Style from "./cart.module.scss";

import CartList from "./list";
import CartCheck from "./check";
import Slider from "./slider";

const Cart: React.FC = () => {
  return (
    <>
      <section className={Style.cart}>
        <div className="container">
          <div className={Style.inner}>
            <CartList />

            <CartCheck />
          </div>

          <Slider />
        </div>
      </section>
    </>
  );
};

export default Cart;
