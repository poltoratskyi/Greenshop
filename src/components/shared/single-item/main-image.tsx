"use client";

import Image from "next/image";

import { Item } from "../../../types";

import Style from "./single-item.module.scss";

import DiscountBadge from "./discount-badge";
import { useUIStore } from "../../../store";

interface Props {
  item: Item;
}

const MainImage: React.FC<Props> = ({ item }) => {
  const switchImage = useUIStore((state) => state.switchImage);
  const imgUrl = switchImage === null ? item.imgUrl : switchImage;

  return (
    <div className={Style.main}>
      <Image
        width={600}
        height={600}
        priority
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src={imgUrl}
        alt={item.name}
      />

      <DiscountBadge item={item} />
    </div>
  );
};

export default MainImage;
