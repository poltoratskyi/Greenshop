"use client";

import Link from "next/link";

import { Item } from "../../../types";

import Style from "./catalog.module.scss";

import { percentValue } from "../../../hooks/index";
import { svgCart, svgHeart } from "./static-data";

const List: React.FC<Item> = ({ id, imgUrl, name, variations }) => {
  return (
    <>
      <div className={Style.block}>
        <Link className={Style.img_link} href={`/item/${id}`}>
          <div className={Style.line}></div>

          <img
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

        <Link className={Style.title} href={`/item/${id}`}>
          {name}
        </Link>

        {variations[0]?.onSale && (
          <div className={Style.percent}>
            {percentValue(variations[0].price, variations[0].sailPrice)}
            {"% OFF"}
          </div>
        )}
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
