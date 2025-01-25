"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/zoom";
import "swiper/scss/thumbs";
import "swiper/scss/a11y";
import "./slider.css";
import { ItemVariation } from "../../../types";
import Style from "./single-item.module.scss";
import { useUIStore } from "../../../store";
import DiscountBadge from "./discount-badge";

interface Props {
  imgUrl: string;
  name: string;
  variations: ItemVariation[];
}

const ImageGallery: React.FC<Props> = ({ imgUrl, name, variations }) => {
  const pathname = usePathname();

  const images = [imgUrl, imgUrl, imgUrl, "/catalog/3-min.png"];

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
        modules={[Navigation, Zoom, Thumbs, Pagination, A11y]}
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
                alt={name}
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
        modules={[Navigation, Zoom, Thumbs, Pagination, A11y]}
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
                }}
                src={imgUrl}
                alt={name}
              />
            </div>

            <DiscountBadge variations={variations} />
          </SwiperSlide>
        ))}

        <div
          id="item-button-prev"
          aria-label="Previous slide"
          className="swiper-button-prev"
        ></div>
        <div
          id="item-button-next"
          aria-label="Next slide"
          className="swiper-button-next"
        ></div>
      </Swiper>

      <div aria-label="Pagination" className="swiper-pagination-item"></div>
    </div>
  );
};

export default ImageGallery;
