"use client";

import Style from "./single-item.module.scss";
import { ItemVariation } from "../../../types";
import { calculateDiscountPercentage } from "../../../lib";
import { useUIStore } from "../../../store";

interface Props {
  variations: ItemVariation[];
}

const DiscountBadge: React.FC<Props> = ({ variations }) => {
  const selectedSizeIndex = useUIStore((state) => state.selectedSizeIndex);

  return (
    <>
      {variations[selectedSizeIndex].onSale && (
        <div className={Style.percent}>
          {calculateDiscountPercentage(
            variations[selectedSizeIndex].price,
            variations[selectedSizeIndex].sale
          )}
          {"% OFF"}
        </div>
      )}
    </>
  );
};

export default DiscountBadge;
