"use client";

import Style from "./cart.module.scss";
import Lists from "./list";
import Review from "./review";
import Slider from "../slider";
import Pathname from "../pathname";
import Inner from "./inner";
import SizeSelectionModal from "../size-selection-modal";
import { useCartFilteredCatalog } from "../../../hooks/use-cart-filtered-catalog";

const Cart: React.FC = () => {
  const { cartItems, filteredItems, isEmpty } = useCartFilteredCatalog();

  return (
    <>
      <Pathname second="Cart" />

      <section className={Style.cart}>
        <div className="container">
          <Inner>
            <Lists />

            <Review />
          </Inner>

          {cartItems.length > 0 && !isEmpty && (
            <Slider filteredItems={filteredItems} />
          )}
        </div>
      </section>

      <SizeSelectionModal />
    </>
  );
};

export default Cart;
