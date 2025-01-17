import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/a11y";
import "../cart/slider.css";
import ItemsWrapper from "../catalog/items-wrapper";

import CatalogStyle from "../../shared/catalog/catalog.module.scss";
import ItemList from "../../shared/catalog/item-list";
import SingleItemWrapper from "./single-item-wrapper";

const Slider: React.FC = () => {
  const storedItems = JSON.parse(
    localStorage.getItem("viewed products") || "[]"
  );

  return (
    <>
      {storedItems.length > 0 && (
        <SingleItemWrapper title="viewed Products">
          <Swiper
            spaceBetween={25}
            slidesPerView={4.4}
            speed={1000}
            slidesPerGroup={1}
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
            {storedItems.map((item: any) => (
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
        </SingleItemWrapper>
      )}
    </>
  );
};

export default Slider;
