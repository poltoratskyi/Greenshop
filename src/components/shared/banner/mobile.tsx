"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/a11y";
import "./slider.css";

import Style from "./banner.module.scss";

import { slides } from "./static-data";

const Mobile: React.FC = () => {
  return (
    <div className={Style.mobile}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-banner",
        }}
        modules={[Pagination, Autoplay, A11y]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              width={600}
              height={600}
              priority={slide.id === 1}
              style={{
                width: "100%",
                height: "auto",
              }}
              src={slide.src}
              alt={slide.alt}
              aria-label={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div aria-label="Pagination" className="swiper-pagination-banner"></div>
    </div>
  );
};

export default Mobile;
