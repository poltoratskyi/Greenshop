"use client";

import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";

import "../../shared/banner/slider.css";

import Style from "./cart.module.scss";
import CatalogStyle from "../../shared/catalog/catalog.module.scss";

import { useCartStore, useCatalogStore } from "../../../store";

import ItemList from "../../shared/catalog/item-list";
import ItemsWrapper from "../../shared/catalog/items-wrapper";
import ModalChooseItemSize from "@/components/shared/modal-choose-item-size";

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
            spaceBetween={20}
            slidesPerView={5}
            speed={1000}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },

              1025: {
                slidesPerView: 5,
              },
            }}
          >
            {filteredCatalog.map((item) => (
              <SwiperSlide key={item.id}>
                <ItemsWrapper gridUnset>
                  <li className={CatalogStyle.list}>
                    <ItemList {...item} />
                  </li>
                </ItemsWrapper>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination swiper-pagination_cart"></div>
        </div>
      )}

      <ModalChooseItemSize />
    </>
  );
};

export default Slider;
