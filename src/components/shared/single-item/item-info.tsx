"use client";

import Style from "./single-item.module.scss";
import { ItemVariation } from "../../../types";
import { useUIStore } from "../../../store";
import Button from "../button";
import { svgHeart } from "./static-data";
import { useAddToCart } from "../../../hooks";

interface Props {
  id: number;
  shortDescription: string;
  variations: ItemVariation[];
}

const ItemInfo: React.FC<Props> = ({ id, shortDescription, variations }) => {
  const selectedSizeIndex = useUIStore((state) => state.selectedSizeIndex);
  const setSelectedSizeIndex = useUIStore(
    (state) => state.setSelectedSizeIndex
  );

  const { handleAddToCart } = useAddToCart();

  return (
    <>
      <span className={Style.price}>
        {variations[selectedSizeIndex].onSale ? (
          <div className={Style.info}>
            <span className={Style.sale}>
              ${variations[selectedSizeIndex].price.toFixed(2)}
            </span>

            <span className={Style.price}>
              ${variations[selectedSizeIndex].sale.toFixed(2)}
            </span>
          </div>
        ) : (
          <div className={Style.info}>
            <span className={Style.price}>
              ${variations[selectedSizeIndex]?.price.toFixed(2)}
            </span>
          </div>
        )}
      </span>

      <span className={Style.line}></span>

      <span className={Style.subtitle}>Short Description:</span>

      <p className={Style.description}>{shortDescription}</p>

      <span className={Style.size}>Size:</span>

      <ul className={Style.lists}>
        {variations.map((variation) => (
          <li
            onClick={() => setSelectedSizeIndex(variation.sizeId - 1)}
            className={
              selectedSizeIndex === variation.sizeId - 1
                ? `${Style.list} ${Style.selected}`
                : Style.list
            }
            key={variation.size.id - 1}
          >
            {variation.size.shortName}
          </li>
        ))}
      </ul>

      <div className={Style.action}>
        <Button
          buy
          handleAddToCart={() =>
            handleAddToCart(id, selectedSizeIndex, variations)
          }
          className="buy"
          value="Buy NOW"
        />

        <Button
          addToCart
          handleAddToCart={() =>
            handleAddToCart(id, selectedSizeIndex, variations)
          }
          className="add"
          value="Add to cart"
        />

        <Button link linkValue="/login" className="favorite" value={svgHeart} />
      </div>
    </>
  );
};

export default ItemInfo;
