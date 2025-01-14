"use client";

import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/a11y";
import "./slider.css";

import Style from "./cart.module.scss";
import CatalogStyle from "../../shared/catalog/catalog.module.scss";

import { useCartStore, useCatalogStore } from "../../../store";

import ItemList from "../../shared/catalog/item-list";
import ItemsWrapper from "../../shared/catalog/items-wrapper";
import ModalChooseItemSize from "@/components/ui/modal-choose-item-size";

const Slider: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const loadCatalog = useCatalogStore((state) => state.loadCatalog);
  const catalog = useCatalogStore((state) => state.catalog);

  // Get cart items categories
  const itemCategories = cartItems.map((item) => item.category.name);

  // Get cart items ids
  const itemIdsInCart = cartItems.map((item) => item.itemId);

  useEffect(() => {
    loadCatalog();
  }, []);

  const filteredCatalog = catalog
    .filter((item) => itemCategories.includes(item.category.name))
    .filter((item) => !itemIdsInCart.includes(item.id));

  const isEmpty = filteredCatalog.length === 0;

  return (
    <>
      {cartItems.length > 0 && !isEmpty && (
        <div className={Style.slider}>
          <h4 className={Style.title}>You may be interested in</h4>

          <Swiper
            spaceBetween={25}
            slidesPerView={4.4}
            speed={1000}
            slidesPerGroup={2}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-cart",
            }}
            watchOverflow
            modules={[Pagination, Navigation, A11y]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.4,
              },

              420: {
                slidesPerView: 2.4,
              },

              992: {
                slidesPerView: 4.4,
              },
            }}
          >
            {filteredCatalog.map((item) => (
              <SwiperSlide key={item.id}>
                <ItemsWrapper gridUnset>
                  <div className={CatalogStyle.list}>
                    <ItemList {...item} />
                  </div>
                </ItemsWrapper>
              </SwiperSlide>
            ))}

            <div
              id="cart-button-prev"
              aria-label="Previous slide"
              className="swiper-button-prev"
            ></div>
            <div
              id="cart-button-next"
              aria-label="Next slide"
              className="swiper-button-next"
            ></div>

            <div
              aria-label="Pagination"
              className="swiper-pagination-cart"
            ></div>
          </Swiper>
        </div>
      )}

      <ModalChooseItemSize />
    </>
  );
};

export default Slider;
