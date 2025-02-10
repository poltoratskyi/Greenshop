"use client";

import Style from "./cart.module.scss";
import List from "./list";
import Review from "../../ui/cart-order-review";
import Slider from "../slider";
import Pathname from "../pathname";
import Container from "../../ui/cart-order-container";
import SizeSelectionModal from "../size-selection-modal";
import CartEmpty from "./cart-empty";
import { useCartFilteredCatalog } from "../../../hooks/use-cart-filtered-catalog";
import Links from "./links";
import CouponInput from "../../ui/coupon-input";
import Summary from "./summary";
import Wrapper from "../../ui/cart-order-wrapper";

const Cart: React.FC = () => {
  const { cartItems, filteredItems, isEmpty } = useCartFilteredCatalog();

  return (
    <>
      <Pathname second="Cart" />

      <section className={Style.cart}>
        <div className="container">
          <Container>
            <CartEmpty>
              <Wrapper>
                <List />
              </Wrapper>

              <Review summaryWidth title="Cart Totals">
                <CouponInput />
                <Summary />
                <Links />
              </Review>
            </CartEmpty>
          </Container>

          {cartItems.length > 0 && !isEmpty && (
            <div style={{ marginTop: "50px" }}>
              <Slider filteredItems={filteredItems} />
            </div>
          )}
        </div>
      </section>

      <SizeSelectionModal />
    </>
  );
};

export default Cart;
