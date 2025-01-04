"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Style from "./modal-choose-item-size.module.scss";

import { Item } from "../../../types";

import ItemInfo from "./item-info";

import { useUIStore, useCartStore } from "../../../store";

interface Props extends Item {}

const ItemList: React.FC<Props> = ({
  variations,
  id,
  imgUrl,
  name,
  tags,
  sku,
}) => {
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
    <>
      <div className={Style.info}>
        <Link
          className={Style.img}
          href={`/item/${id}`}
          onClick={() => setOpenModalSize(false)}
        >
          <Image
            width={600}
            height={600}
            style={{
              width: "100%",
              height: "auto",
            }}
            src={imgUrl}
            alt={name}
          />
        </Link>

        <div className={Style.text}>
          <Link
            className={Style.name}
            href={`/item/${id}`}
            onClick={() => setOpenModalSize(false)}
          >
            {name}
          </Link>

          <p className={Style.sku}>
            <span>Sku:</span>
            {sku}
          </p>

          <p className={Style.tags}>
            <span>Tags:</span>
            {tags}
          </p>
        </div>
      </div>

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
    </>
  );
};

export default ItemList;
