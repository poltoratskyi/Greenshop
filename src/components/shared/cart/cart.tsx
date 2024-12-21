import Style from "./cart.module.scss";

import ItemsList from "./items-list";
import Review from "./review";
import Slider from "./slider";
import Pathname from "../pathname";
import Inner from "./inner";

const Cart: React.FC = () => {
  return (
    <>
      <Pathname second="Cart" />

      <section className={Style.cart}>
        <div className="container">
          <Inner>
            <ItemsList />

            <Review />
          </Inner>

          <Slider />
        </div>
      </section>
    </>
  );
};

export default Cart;
