"use client";

import Style from "./cart.module.scss";
import ItemsList from "./items-list";
import Review from "./review";
import Slider from "../slider";
import Pathname from "../pathname";
import Inner from "./inner";
import ModalChooseItemSize from "../../../components/ui/modal-choose-item-size";
import { getFilteredItemsCart } from "../../../hooks";

const Cart: React.FC = () => {
  const { cartItems, filteredItems, isEmpty } = getFilteredItemsCart();

  return (
    <>
      <Pathname second="Cart" />

      <section className={Style.cart}>
        <div className="container">
          <Inner>
            <ItemsList />

            <Review />
          </Inner>

          {cartItems.length > 0 && !isEmpty && (
            <Slider filteredItems={filteredItems} />
          )}
        </div>
      </section>

      <ModalChooseItemSize />
    </>
  );
};

export default Cart;
