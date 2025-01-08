"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "./slider.css";

import Style from "./banner.module.scss";

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
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Image
            width={600}
            height={600}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
            src="/header/slider/adv-1-min.png"
            alt="adv-1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={600}
            height={600}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
            src="/header/slider/adv-1-min.png"
            alt="adv-1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={600}
            height={600}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
            src="/header/slider/adv-1-min.png"
            alt="adv-1"
          />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination-banner"></div>
    </div>
  );
};

export default Mobile;
