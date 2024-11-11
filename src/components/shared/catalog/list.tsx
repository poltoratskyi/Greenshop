"use client";

import Link from "next/link";
import Image from "next/image";

import { Item } from "../../../types";

import Style from "./catalog.module.scss";

import { percentValue, handleRelatedItems } from "../../../hooks/index";
import { svgCart, svgHeart } from "./static-data";

import { useSearchStore, useUIStore } from "../../../utils/store";

interface Props extends Item {
  control?: boolean;
}

const List: React.FC<Props> = ({
  id,
  imgUrl,
  name,
  shortDescription,
  extendedDescription,
  categories,
  tags,
  sku,
  categoryId,
  createdAt,
  updatedAt,
  variations,
  control,
}) => {
  const openSearch = useUIStore((state) => state.openSearch);
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);

  const setInputValue = useSearchStore((state) => state.setInputValue);
  const clearResults = useSearchStore((state) => state.clearResults);

  const checkRelatedItems = () => {
    const itemProps = {
      id,
      imgUrl,
      name,
      shortDescription,
      extendedDescription,
      categories,
      tags,
      sku,
      categoryId,
      createdAt,
      updatedAt,
      variations,
    };

    handleRelatedItems(itemProps);
  };

  return (
    <>
      <div>
        <div
          style={!control ? { paddingBottom: "unset" } : {}}
          className={Style.block}
        >
          <Link
            onClick={() => {
              checkRelatedItems();
              if (openSearch) {
                setOpenSearch && setOpenSearch(false);
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
              {svgHeart}

              {svgCart}
            </div>
          )}

          {variations[0]?.onSale && (
            <div className={Style.percent}>
              {percentValue(variations[0].price, variations[0].sailPrice)}
              {"% OFF"}
            </div>
          )}
        </div>

        <Link
          onClick={() => {
            checkRelatedItems();
            if (openSearch) {
              setOpenSearch && setOpenSearch(false);
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
      {variations[0]?.onSale ? (
        <div className={Style.info}>
          <span className={Style.price}>
            ${variations[0].sailPrice.toFixed(2)}
          </span>

          <span className={Style.sailPrice}>
            ${variations[0].price.toFixed(2)}
          </span>
        </div>
      ) : (
        <div className={Style.info}>
          <span className={Style.price}>
            ${variations[0]?.price.toFixed(2)}
          </span>
        </div>
      )}
    </>
  );
};

export default List;
