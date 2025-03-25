"use client";

import Style from "./cart.module.scss";
import List from "./list";
import Slider from "../../ui/slider";
import Pathname from "../../ui/pathname";
import { Container, Review, Wrapper } from "../layout";
import SizeSelectionModal from "../../ui/size-selection-modal";
import { useCartFilteredCatalog } from "../../../hooks/use-cart-filtered-catalog";
import Links from "./links";
import ActionInput from "../../ui/coupon-sender-input";
import Summary from "./summary";
import Placeholder from "../placeholder";

const Cart: React.FC = () => {
  const { cartItems, filteredItems, isEmpty } = useCartFilteredCatalog();

  if (cartItems.length === 0) {
    return (
      <>
        <Pathname second="Cart" />

        <section className={Style.cart}>
          <div className="container">
            <div className={Style.empty}>
              <Placeholder />
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Pathname second="Cart" />

      <section className={Style.cart}>
        <div className="container">
          <Container>
            <Wrapper>
              <List />
            </Wrapper>

            <Review summaryWidth title="Cart Totals">
              <ActionInput
                id="couponCode"
                name="couponCode"
                type="text"
                className="coupon"
                label="Coupon Apply"
                placeholder="Coupon"
                buttonText="Apply"
                buttonClassName="coupon"
                labelClassName={""}
                blockClassName={""}
                inputClassName={""}
              />
              <Summary />
              <Links />
            </Review>
          </Container>

          {cartItems.length > 0 && !isEmpty && (
            <div style={{ marginTop: "50px" }}>
              <Slider items={filteredItems} />
            </div>
          )}
        </div>
      </section>

      <SizeSelectionModal />
    </>
  );
};

export default Cart;
