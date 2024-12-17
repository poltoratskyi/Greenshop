import Style from "./cart.module.scss";

import ItemsList from "./items-list";
import Review from "./review";
import Slider from "./slider";
import Pathname from "../pathname";

const Cart: React.FC = () => {
  return (
    <>
      <Pathname second="Cart" />

      <section className={Style.cart}>
        <div className="container">
          <div className={Style.inner}>
            <ItemsList />

            <Review />
          </div>

          <Slider />
        </div>
      </section>
    </>
  );
};

export default Cart;
