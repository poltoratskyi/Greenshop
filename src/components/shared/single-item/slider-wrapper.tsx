"use client";

import { SwiperSlide } from "swiper/react";
import { Item } from "../../../types";
import Slider from "../../ui/slider";
import ItemsWrapper from "../../shared/catalog/wrapper";
import ItemList from "../../shared/catalog/card";
import CatalogStyle from "../../shared/catalog/catalog.module.scss";
import Title from "../title-wrapper";

const SliderWrapper: React.FC = () => {
  const items: Item[] = [];

  try {
    const storedItems = localStorage.getItem("viewedProducts");

    if (storedItems) {
      items.push(...JSON.parse(storedItems));
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error);
  }

  return (
    <>
      {items.length > 0 && (
        <Title title="Viewed Items">
          <Slider>
            {items.map((item) => (
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
      )}
    </>
  );
};

export default SliderWrapper;
