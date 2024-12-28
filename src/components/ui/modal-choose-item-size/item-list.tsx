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
  shortDescription,
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
      <Link
        onClick={() => setOpenModalSize(false)}
        href={`/item/${id}`}
        className={Style.info}
      >
        <div className={Style.img}>
          <Image
            width={252}
            height={252}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            src={imgUrl}
            alt={name}
          />
        </div>

        <div className={Style.text}>
          <h4>{name}</h4>
          <p>{shortDescription}</p>
        </div>
      </Link>

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
