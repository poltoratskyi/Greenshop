"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Style from "./size-selection-modal.module.scss";
import { ItemVariation } from "../../../types";
import Info from "./info";
import { useUIStore, useCartStore } from "../../../store";
import Loader from "../button/loader";
import { saveViewedProduct } from "../../../lib/client";
import { useAddToCart } from "../../../hooks";

interface Props {
  variations: ItemVariation[];
  id: number;
  imgUrl: string;
  name: string;
  tags: string;
  sku: string;
}

const Item: React.FC<Props> = ({ variations, id, imgUrl, name, tags, sku }) => {
  const router = useRouter();

  const isItemAdded = useCartStore((state) => state.isItemAdded);

  const selectedSizeId = useUIStore((state) => state.selectedSizeId);
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);

  const { handleAddToCart } = useAddToCart();

  return (
    <>
      <div className={Style.info}>
        <Link
          className={Style.img}
          href={`/item/${id}`}
          onClick={() => {
            saveViewedProduct({ id, name, imgUrl, variations });

            setIsModalSizeOpen(false);

            window.scrollTo({
              top: 0,
            });
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
              saveViewedProduct({ id, name, imgUrl, variations });
              setIsModalSizeOpen(false);

              window.scrollTo({
                top: 0,
              });
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

      <ul className={Style.variations}>
        {variations.map((variation) => (
          <li
            className={Style.variation}
            style={{
              position: "relative",
              pointerEvents: isItemAdded ? "none" : "auto",
              cursor: isItemAdded ? "not-allowed" : "pointer",
            }}
            key={variation.id}
            onClick={() => {
              handleAddToCart(id, variation.sizeId - 1, variations);
              setIsModalSizeOpen(false);
              router.push("/cart");

              window.scrollTo({
                top: 0,
              });
            }}
          >
            {isItemAdded ? (
              <>
                {selectedSizeId === variation.sizeId && <Loader modal />}

                <Info {...variation} />
              </>
            ) : (
              <Info {...variation} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Item;
