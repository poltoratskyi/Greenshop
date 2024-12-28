"use client";

import { useRouter } from "next/navigation";

import { Item } from "../../../types";

import ItemInfo from "./item-info";

import { useUIStore, useCartStore } from "../../../store";

interface Props extends Item {}

const ItemList: React.FC<Props> = ({ variations, id }) => {
  const router = useRouter();

  const setOpenModalSize = useUIStore((state) => state.setOpenModalSize);

  const addCartItem = useCartStore((state) => state.addCartItem);

  const handleAddToCart = async (sizeId: number) => {
    try {
      const variation = variations[sizeId - 1];

      await addCartItem({
        itemId: id,
        variationId: variation.sizeId,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <ul>
      {variations.map((variation) => (
        <li
          onClick={() => {
            handleAddToCart(variation.sizeId as number);
            setOpenModalSize(false);
            router.push("/cart");
          }}
          key={variation.id}
        >
          <ItemInfo {...variation} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
