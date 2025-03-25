"use client";

import Style from "./single-item.module.scss";
import { ItemVariation } from "../../../types";
import { calculateDiscountPercentage } from "../../../lib/client";
import { useUIStore } from "../../../store";

interface Props {
  variations: ItemVariation[];
}

const DiscountIcon: React.FC<Props> = ({ variations }) => {
  const currentSizeIndex = useUIStore((state) => state.currentSizeIndex);

  return (
    <>
      {variations[currentSizeIndex].onSale && (
        <div className={Style.percent}>
          {calculateDiscountPercentage(
            variations[currentSizeIndex].price,
            variations[currentSizeIndex].sale
          )}
          {"% OFF"}
        </div>
      )}
    </>
  );
};

export default DiscountIcon;
