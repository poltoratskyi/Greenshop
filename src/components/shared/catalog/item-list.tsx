"use client";

import Link from "next/link";
import Image from "next/image";

import { Item } from "../../../types";

import Style from "./catalog.module.scss";

import { getDiscountPercent } from "../../../hooks";
import { svgCart, svgHeart } from "./static-data";

import { useSearchStore, useUIStore } from "../../../store";

interface Props extends Item {
  control?: boolean;
}

const ItemList: React.FC<Props> = ({
  id,
  imgUrl,
  name,
  variations,
  control,
}) => {
  const search = useUIStore((state) => state.search);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setOpenModalSize = useUIStore((state) => state.setOpenModalSize);
  const setSelectedItemId = useUIStore((state) => state.setSelectedItemId);

  const setInputValue = useSearchStore((state) => state.setInputValue);
  const clearResults = useSearchStore((state) => state.clearResults);

  return (
    <>
      <div>
        <div
          style={!control ? { paddingBottom: "unset" } : {}}
          className={Style.block}
        >
          <Link
            onClick={() => {
              if (search) {
                setOpenSearch(false);
                setInputValue("");
                clearResults();
              }
              document.body.style.overflow = "auto";
            }}
            className={Style.img}
            href={`/item/${id}`}
          >
            <div className={Style.line}></div>

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
          </Link>

          {control && (
            <div className={Style.control}>
              <Link className={Style.favorite} href="/login">
                {svgHeart}
              </Link>

              <span
                onClick={() => {
                  setSelectedItemId(id);
                  setOpenModalSize(true);
                }}
                className={Style.cart}
              >
                {svgCart}
              </span>
            </div>
          )}

          {control && (
            <div className={Style.control_mobile}>
              <span
                onClick={() => {
                  setSelectedItemId(id);
                  setOpenModalSize(true);
                }}
                className={Style.cart_mobile}
              >
                {svgCart}
              </span>
            </div>
          )}

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
          <span className={Style.price}>${variations[0].sale.toFixed(2)}</span>

          <span className={Style.sale}>${variations[0].price.toFixed(2)}</span>
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
