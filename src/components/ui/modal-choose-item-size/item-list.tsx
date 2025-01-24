"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Style from "./modal-choose-item-size.module.scss";

import { ItemVariation } from "../../../types";

import ItemInfo from "./item-info";

import { useUIStore, useCartStore } from "../../../store";
import Loader from "../../../components/shared/button/loader";
import { getLocalStoreItems, useAddItemCart } from "../../../hooks";

interface Props {
  variations: ItemVariation[];
  id: number;
  imgUrl: string;
  name: string;
  tags: string;
  sku: string;
}

const ItemList: React.FC<Props> = ({
  variations,
  id,
  imgUrl,
  name,
  tags,
  sku,
}) => {
  const router = useRouter();

  const isLoadingItem = useCartStore((state) => state.isLoadingItem);

  const selectedItemSizeId = useUIStore((state) => state.selectedItemSizeId);
  const setOpenModalSize = useUIStore((state) => state.setOpenModalSize);

  const { handleAddToCart } = useAddItemCart();

  return (
    <>
      <div className={Style.info}>
        <Link
          className={Style.img}
          href={`/item/${id}`}
          onClick={() => {
            getLocalStoreItems({ id, name, imgUrl, variations });

            setOpenModalSize(false);
          }}
        >
          <Image
            width={600}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              padding: "10px",
            }}
            src={imgUrl}
            alt={name}
          />
        </Link>

        <div className={Style.text}>
          <Link
            className={Style.name}
            href={`/item/${id}`}
            onClick={() => {
              getLocalStoreItems({ id, name, imgUrl, variations });
              setOpenModalSize(false);
            }}
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
            style={{
              position: "relative",
              pointerEvents: isLoadingItem ? "none" : "auto",
              cursor: isLoadingItem ? "not-allowed" : "pointer",
            }}
            key={variation.id}
            onClick={() => {
              handleAddToCart(id, variation.sizeId, variations);
              setOpenModalSize(false);
              router.push("/cart");
            }}
          >
            {isLoadingItem ? (
              <>
                {selectedItemSizeId === variation.sizeId && <Loader modal />}
                <ItemInfo {...variation} />
              </>
            ) : (
              <ItemInfo {...variation} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
