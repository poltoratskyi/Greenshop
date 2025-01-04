"use client";

import Style from "./single-item.module.scss";

import { Item } from "../../../types";

import { useUIStore, useCartStore } from "../../../store";

import Button from "../button";

import { svgHeart } from "./static-data";

interface Props {
  item: Item;
}

const ItemInfo: React.FC<Props> = ({ item }) => {
  const selectedSizeIndex = useUIStore((state) => state.selectedSizeIndex);
  const setSelectedSizeIndex = useUIStore(
    (state) => state.setSelectedSizeIndex
  );

  const addCartItem = useCartStore((state) => state.addCartItem);

  const handleAddToCart = async () => {
    try {
      const variation = item.variations[selectedSizeIndex];

      await addCartItem({
        itemId: item.id,
        variationId: variation.sizeId,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <>
      <span className={Style.price}>
        {item.variations[selectedSizeIndex].onSale ? (
          <div className={Style.info}>
            <span className={Style.sale}>
              ${item.variations[selectedSizeIndex].price.toFixed(2)}
            </span>

            <span className={Style.price}>
              ${item.variations[selectedSizeIndex].sale.toFixed(2)}
            </span>
          </div>
        ) : (
          <div className={Style.info}>
            <span className={Style.price}>
              ${item.variations[selectedSizeIndex]?.price.toFixed(2)}
            </span>
          </div>
        )}
      </span>

      <span className={Style.line}></span>

      <span className={Style.subtitle}>Short Description:</span>

      <p className={Style.description}>{item.shortDescription}</p>

      <span className={Style.size}>Size:</span>

      <ul className={Style.lists}>
        {item.variations.map((variation) => (
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
          handleAddToCart={handleAddToCart}
          className="buy"
          value="Buy NOW"
        />

        <Button
          addToCart
          handleAddToCart={handleAddToCart}
          className="add"
          value="Add to cart"
        />

        <Button link linkValue="/login" className="favorite" value={svgHeart} />
      </div>
    </>
  );
};

export default ItemInfo;
