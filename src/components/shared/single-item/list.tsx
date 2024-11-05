"use client";

import Link from "next/link";
import Image from "next/image";

import Style from "./single-item.module.scss";

import { Item } from "../../../types";

import { percentValue } from "../../../hooks/index";

import { media, svgHeart } from "./static-data";
import Button from "../button";
import { useState } from "react";

interface Props {
  item: Item;
}

const List: React.FC<Props> = ({ item }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);

  return (
    <div className={Style.content}>
      <Image
        width={575}
        height={575}
        priority
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
        src={item.imgUrl}
        alt={item.name}
      />

      {item.variations[selectedSizeIndex]?.onSale && (
        <div className={Style.percent}>
          {percentValue(
            item.variations[selectedSizeIndex].price,
            item.variations[selectedSizeIndex].sailPrice
          )}
          {"% OFF"}
        </div>
      )}

      <div className={Style.info}>
        <h2>{item.name}</h2>
        <span className={Style.price}>
          {item.variations[selectedSizeIndex]?.onSale ? (
            <div className={Style.info}>
              <span className={Style.price}>
                ${item.variations[selectedSizeIndex].sailPrice.toFixed(2)}
              </span>

              <span className={Style.sailPrice}>
                ${item.variations[selectedSizeIndex].price.toFixed(2)}
              </span>
            </div>
          ) : (
            <div className={Style.info}>
              <span className={Style.price}>
                ${item.variations[selectedSizeIndex]?.price.toFixed(2)}
              </span>
            </div>
          )}
        </span>
        <span className={Style.line}></span>
        <span className={Style.short}>Short Description:</span>
        <p className={Style.description}>{item.shortDescription}</p>
        <span className={Style.size}>Size:</span>

        <ul className={Style.lists}>
          {item.variations.map((variation) => (
            <li
              onClick={() => setSelectedSizeIndex(variation.sizeId - 1)}
              className={
                selectedSizeIndex === variation.sizeId - 1
                  ? `${Style.list} ${Style.selected}`
                  : Style.list
              }
              key={variation.size.id - 1}
            >
              {variation.size.shortName}
            </li>
          ))}
        </ul>

        <div className={Style.action}>
          <Button button className="buy" value="Buy NOW" />
          <Button button className="add" value="Add to cart" />
          <Button button className="favorite" svgCenter={svgHeart} />
        </div>

        <p className={Style.sku}>
          <span>SKU: </span>
          {item.sku}
        </p>

        <p className={Style.categories}>
          <span>Categories: </span>
          {item.categories}
        </p>

        <p className={Style.tags}>
          <span>Tags: </span>
          {item.tags}
        </p>

        <div className={Style.share}>
          <p className={Style.text}>Share this products:</p>

          <ul className={Style.share_lists}>
            {media.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.svg}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
