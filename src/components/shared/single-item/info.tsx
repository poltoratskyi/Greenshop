"use client";

import Style from "./single-item.module.scss";
import { ItemVariation } from "../../../types";
import { useCartStore, useUIStore } from "../../../store";
import Button from "../../ui/button";
import { svgHeart } from "./static-data";
import { useAddToCart } from "../../../hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  shortDescription: string;
  variations: ItemVariation[];
}

const Info: React.FC<Props> = ({ id, shortDescription, variations }) => {
  const router = useRouter();

  const isItemAdded = useCartStore((state) => state.isItemAdded);

  const currentSizeIndex = useUIStore((state) => state.currentSizeIndex);
  const setCurrentSizeIndex = useUIStore((state) => state.setCurrentSizeIndex);

  const { handleAddToCart } = useAddToCart();

  return (
    <>
      <span className={Style.price}>
        {variations[currentSizeIndex].onSale ? (
          <div className={Style.info}>
            <span className={Style.sale}>
              ${variations[currentSizeIndex].price.toFixed(2)}
            </span>

            <span className={Style.price}>
              ${variations[currentSizeIndex].sale.toFixed(2)}
            </span>
          </div>
        ) : (
          <div className={Style.info}>
            <span className={Style.price}>
              ${variations[currentSizeIndex]?.price.toFixed(2)}
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
            onClick={() => setCurrentSizeIndex(variation.sizeId - 1)}
            className={
              currentSizeIndex === variation.sizeId - 1
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
          isLoading={isItemAdded}
          onClick={() => {
            handleAddToCart(id, currentSizeIndex, variations);
            router.push("/cart");
          }}
          className="buy"
          value="Buy Now"
          type="button"
        />

        <Button
          isLoading={isItemAdded}
          onClick={() => handleAddToCart(id, currentSizeIndex, variations)}
          className="add"
          value="Add to Cart"
          type="button"
        />

        <Link href="/login">{svgHeart}</Link>
      </div>
    </>
  );
};

export default Info;
