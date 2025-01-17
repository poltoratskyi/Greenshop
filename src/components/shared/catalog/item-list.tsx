"use client";

import Link from "next/link";
import Image from "next/image";

import { ItemVariation } from "../../../types";

import Style from "./catalog.module.scss";

import { getDiscountPercent, getLocalStoreItems } from "../../../hooks";
import { svgCart, svgHeart } from "./static-data";
import { useItemStore, useSearchStore, useUIStore } from "../../../store";

interface Props {
  id: number;
  name: string;
  imgUrl: string;
  variations: ItemVariation[];
}

const ItemList: React.FC<Props> = ({ id, name, imgUrl, variations }) => {
  const search = useUIStore((state) => state.search);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setOpenModalSize = useUIStore((state) => state.setOpenModalSize);
  const setInputValue = useSearchStore((state) => state.setInputValue);
  const clearResults = useSearchStore((state) => state.clearResults);

  const loadModalSingleItem = useItemStore(
    (state) => state.loadModalSingleItem
  );

  return (
    <>
      <div>
        <div className={Style.block}>
          <Link
            onClick={() => {
              if (search) {
                setOpenSearch(false);
                setInputValue("");
                clearResults();
              }

              getLocalStoreItems({ id, name, imgUrl, variations });

              document.body.style.overflow = "auto";
            }}
            className={Style.img}
            href={`/item/${id}`}
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

          <div className={Style.control}>
            <Link className={Style.favorite} href="/login">
              {svgHeart}
            </Link>

            <span
              onClick={() => {
                loadModalSingleItem(id);
                setOpenModalSize(true);
              }}
              className={Style.cart}
            >
              {svgCart}
            </span>
          </div>

          <div className={Style.control_mobile}>
            <span
              onClick={() => {
                loadModalSingleItem(id);
                setOpenModalSize(true);
              }}
              className={Style.cart_mobile}
            >
              {svgCart}
            </span>
          </div>

          {variations[0].onSale && (
            <div className={Style.percent}>
              {getDiscountPercent(variations[0].price, variations[0].sale)}
              {"% OFF"}
            </div>
          )}
        </div>

        <Link
          onClick={() => {
            if (search) {
              setOpenSearch(false);
              setInputValue("");
              clearResults();
            }

            getLocalStoreItems({ id, name, imgUrl, variations });

            document.body.style.overflow = "auto";
          }}
          className={Style.title}
          href={`/item/${id}`}
        >
          {name}
        </Link>
      </div>

      {variations[0].onSale ? (
        <div className={Style.info}>
          <span className={Style.sale}>${variations[0].price.toFixed(2)}</span>

          <span className={Style.price}>${variations[0].sale.toFixed(2)}</span>
        </div>
      ) : (
        <div className={Style.info}>
          <span className={Style.price}>${variations[0].price.toFixed(2)}</span>
        </div>
      )}
    </>
  );
};

export default ItemList;
