"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";

import Style from "./banner.module.scss";
import "./slider.css";

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
          el: ".swiper-pagination",
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Image
            width={575}
            height={575}
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            src="/header/slider/adv-1-min.png"
            alt="adv-1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={575}
            height={575}
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            src="/header/slider/adv-1-min.png"
            alt="adv-1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={575}
            height={575}
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            src="/header/slider/adv-1-min.png"
            alt="adv-1"
          />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Mobile;
