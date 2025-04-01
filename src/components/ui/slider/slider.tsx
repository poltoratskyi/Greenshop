import { Swiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/a11y";
import "./slider.css";

interface Props {
  children: React.ReactNode;
  lastPoint?: number;
}

const Slider: React.FC<Props> = ({ children, lastPoint = 4.4 }) => {
  return (
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
          slidesPerView: lastPoint,
        },
      }}
    >
      {children}

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

      <div aria-label="Pagination" className="swiper-pagination-cart"></div>
    </Swiper>
  );
};

export default Slider;
