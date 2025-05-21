"use client";

import Style from "./single-item.module.scss";
import { ItemVariation } from "../../../types";
import { useCartStore, useItemStore, useUIStore } from "../../../store";
import Button from "../../ui/button";
import { svgHeart } from "./static-data";
import { useAddToCart } from "../../../hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props {
  id: number;
  shortDescription: string;
  variations: ItemVariation[];
}

const Info: React.FC<Props> = ({ id, shortDescription, variations }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const isItemAdded = useCartStore((state) => state.isItemAdded);

  const currentSizeIndex = useUIStore((state) => state.currentSizeIndex);
  const setCurrentSizeIndex = useUIStore((state) => state.setCurrentSizeIndex);
  const setOpenedModalType = useUIStore((state) => state.setOpenedModalType);
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);

  const { handleAddToCart } = useAddToCart();

  const loadModalSingleItem = useItemStore(
    (state) => state.loadModalSingleItem
  );

  const openModalWithItem = (boolean: boolean, id: number) => {
    setOpenedModalType(boolean);
    loadModalSingleItem(id);
    setIsModalSizeOpen(true);
  };

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
            className={`
            ${currentSizeIndex === variation.sizeId - 1 ? `${Style.list} ${Style.selected}` : Style.list}
            `} /* ${!variation.isAvailable ? `${Style.list} ${Style.disabled}` : Style.list}`} */
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

        {!session ? (
          <Link className={Style.favorite} href="/login">
            {svgHeart}
          </Link>
        ) : (
          <span
            className={Style.favorite}
            onClick={() => openModalWithItem(false, id)}
          >
            {svgHeart}
          </span>
        )}
      </div>
    </>
  );
};

export default Info;
