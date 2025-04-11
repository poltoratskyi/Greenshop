"use client";

import Link from "next/link";
import Image from "next/image";
import Style from "./size-selection-modal.module.scss";
import { ItemVariation } from "../../../types";
import Info from "./info";
import { useUIStore, useCartStore, useWishlistStore } from "../../../store";
import Loader from "../button/loader";
import { saveViewedProduct } from "../../../lib/client";
import { useAddToCartOrWishlist } from "../../../hooks";

interface Props {
  variations: ItemVariation[];
  id: number;
  imgUrl: string;
  name: string;
  tags: string;
  sku: string;
}

const Item: React.FC<Props> = ({ variations, id, imgUrl, name, tags, sku }) => {
  const isItemAdded = useCartStore((state) => state.isItemAdded);

  const openedModalType = useUIStore((state) => state.openedModalType);
  const selectedSizeId = useUIStore((state) => state.selectedSizeId);
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);
  const isLoading = useUIStore((state) => state.isLoading);

  const { handleAdd } = useAddToCartOrWishlist();

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
              pointerEvents: isItemAdded || isLoading ? "none" : "auto",
              cursor: isItemAdded || isLoading ? "not-allowed" : "pointer",
            }}
            key={variation.id}
            onClick={() =>
              handleAdd(id, variation.sizeId, variations, openedModalType)
            }
          >
            {isItemAdded || isLoading ? (
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
