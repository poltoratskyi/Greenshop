"use client";

import Link from "next/link";
import Image from "next/image";

import { Item } from "../../../types";

import Style from "./catalog.module.scss";

import { percentValue, handleRelatedItems } from "../../../hooks/index";
import { svgCart, svgHeart } from "./static-data";

const List: React.FC<Item> = ({
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
}) => {
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
        <div className={Style.block}>
          <Link
            onClick={() => {
              checkRelatedItems();
              document.body.style.overflow = "auto";
            }}
            className={Style.img_link}
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

          <div className={Style.control}>
            {svgHeart}

            {svgCart}
          </div>

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
