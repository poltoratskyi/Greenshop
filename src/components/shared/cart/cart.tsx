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
import Empty from "../empty";
import { SwiperSlide } from "swiper/react";
import ItemsWrapper from "../../shared/catalog/wrapper";
import ItemList from "../../shared/catalog/card";
import CatalogStyle from "../../shared/catalog/catalog.module.scss";
import Title from "../title-wrapper";
import { useCartStore } from "@/store";
import { useToast } from "@/hooks";
import { useEffect } from "react";

interface Props {
  message: string;
  available: number;
}

const Cart: React.FC = () => {
  const { cartItems, filteredItems, isEmpty } = useCartFilteredCatalog();

  const patchError = useCartStore((state) => state.patchError);

  const { showToast } = useToast();

  useEffect(() => {
    if (patchError) {
      const { message, available }: Props = patchError;

      available > 1
        ? showToast(message + ". Available: " + available + " items", false)
        : showToast(message + ". Available: " + available + " item", false);
    }
  }, [patchError]);

  if (cartItems.length === 0) {
    return (
      <>
        <Pathname second="Cart" />

        <section className={Style.cart}>
          <div className="container">
            <div className={Style.empty}>
              <Empty />
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
              <Title title="You may be interested in">
                <Slider>
                  {filteredItems.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ItemsWrapper gridUnset>
                        <div className={CatalogStyle.list}>
                          <ItemList {...item} />
                        </div>
                      </ItemsWrapper>
                    </SwiperSlide>
                  ))}
                </Slider>
              </Title>
            </div>
          )}
        </div>
      </section>

      <SizeSelectionModal />
    </>
  );
};

export default Cart;
