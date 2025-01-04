"use client";

import Image from "next/image";

import Style from "./single-item.module.scss";

import { Item } from "../../../types";

import { useUIStore } from "../../../store";

interface Props {
  item: Item;
}

const Miniature: React.FC<Props> = ({ item }) => {
  const imageIndex = useUIStore((state) => state.imageIndex);
  const setImageIndex = useUIStore((state) => state.setImageIndex);
  const setSwitchImage = useUIStore((state) => state.setSwitchImage);

  const images = [item.imgUrl, item.imgUrl, item.imgUrl, "/catalog/3-min.png"];

  const handleClick = (index: number) => {
    setImageIndex(index);
    setSwitchImage(images[index]);
  };

  return (
    <ul className={Style.lists}>
      {images.map((imgUrl, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          className={`${
            index === imageIndex ? `${Style.list} ${Style.active}` : Style.list
          }`}
        >
          <Image
            width={600}
            height={600}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
            src={imgUrl}
            alt={item.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default Miniature;
