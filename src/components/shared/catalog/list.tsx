"use client";

import Link from "next/link";

import { Item } from "../../../types";

import Style from "./catalog.module.scss";

import { svgCart, svgHeart } from "./static-data";

const List: React.FC<Item> = ({ id, imgUrl, name, firstVariation }) => {
  const percentValue = (price: number, sailPrice: number) => {
    const discount = ((price - sailPrice) / price) * 100;
    return discount.toFixed(0);
  };

  return (
    <>
      <div className={Style.block}>
        <Link className={Style.img_link} href={`/product/${id}`}>
          <div className={Style.line}></div>

          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src={imgUrl}
            alt={name}
          />
        </Link>

        <div className={Style.control}>
          {svgHeart}

          {svgCart}
        </div>

        <Link className={Style.title} href={`/product/${id}`}>
          {name}
        </Link>

        {firstVariation?.onSale && (
          <div className={Style.percent}>
            {percentValue(firstVariation.price, firstVariation.sailPrice)}
            {"% OFF"}
          </div>
        )}
      </div>

      {firstVariation?.onSale ? (
        <div className={Style.info}>
          <span className={Style.price}>
            ${firstVariation.sailPrice.toFixed(2)}
          </span>

          <span className={Style.sailPrice}>
            ${firstVariation.price.toFixed(2)}
          </span>
        </div>
      ) : (
        <div className={Style.info}>
          <span className={Style.price}>
            ${firstVariation?.price.toFixed(2)}
          </span>
        </div>
      )}
    </>
  );
};

export default List;
