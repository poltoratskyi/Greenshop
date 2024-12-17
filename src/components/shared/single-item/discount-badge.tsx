"use client";

import Style from "./single-item.module.scss";

import { Item } from "../../../types";

import { getDiscountPercent } from "../../../hooks";

import { useUIStore } from "../../../store";

interface Props {
  item: Item;
}

const DiscountBadge: React.FC<Props> = ({ item }) => {
  const selectedSizeIndex = useUIStore((state) => state.selectedSizeIndex);

  return (
    <>
      {item.variations[selectedSizeIndex]?.onSale && (
        <div className={Style.percent}>
          {getDiscountPercent(
            item.variations[selectedSizeIndex].price,
            item.variations[selectedSizeIndex].sale
          )}
          {"% OFF"}
        </div>
      )}
    </>
  );
};

export default DiscountBadge;
