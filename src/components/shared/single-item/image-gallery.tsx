"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/zoom";
import "swiper/scss/thumbs";

import "./slider.css";

import { Item } from "../../../types";

import Style from "./single-item.module.scss";

import { useUIStore } from "../../../store";

import DiscountBadge from "./discount-badge";

interface Props {
  item: Item;
}

const ImageGallery: React.FC<Props> = ({ item }) => {
  const pathname = usePathname();

  const images = [item.imgUrl, item.imgUrl, item.imgUrl, "/catalog/3-min.png"];

  const imageIndex = useUIStore((state) => state.imageIndex);
  const setImageIndex = useUIStore((state) => state.setImageIndex);
  const setResetSelectedVariation = useUIStore(
    (state) => state.setResetSelectedVariation
  );

  useEffect(() => {
    setResetSelectedVariation();
  }, [pathname]);

  return (
    <div className={Style.gallery}>
      {/* miniatures */}
      <Swiper
        id="miniatures"
        className="miniatures"
        slidesPerView={4}
        spaceBetween={15}
        direction="vertical"
        onSlideChange={(swiper) => setImageIndex(swiper.activeIndex)}
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide onClick={() => setImageIndex(index)} key={index}>
            <div className={`${index === imageIndex ? "img active" : "img"}`}>
              <Image
                priority
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "10px",
                  backgroundColor: "#fafafa",
                }}
                src={imgUrl}
                alt={item.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* main */}
      <Swiper
        className="main"
        slidesPerView={1}
        spaceBetween={30}
        speed={1000}
        watchOverflow
        thumbs={{ swiper: ".miniatures" }}
        zoom={{
          maxRatio: 2,
          minRatio: 1,
          containerClass: "swiper-zoom-container",
        }}
        modules={[Navigation, Zoom, Thumbs, Pagination]}
        pagination={{ el: ".swiper-pagination-item", clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChange={(swiper) => setImageIndex(swiper.activeIndex)}
        breakpoints={{
          320: {},

          420: {},

          992: {},
        }}
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <Image
                priority
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "20px",
                  backgroundColor: "#fafafa",
                }}
                src={imgUrl}
                alt={item.name}
              />
            </div>

            <DiscountBadge item={item} />
          </SwiperSlide>
        ))}

        <div id="item-button-prev" className="swiper-button-prev"></div>
        <div id="item-button-next" className="swiper-button-next"></div>
      </Swiper>

      <div className="swiper-pagination-item"></div>
    </div>
  );
};

export default ImageGallery;
