"use client";

import Link from "next/link";

import { Item } from "../../../types";

import Style from "./single-item.module.scss";

import Backspace from "../backspace";

import { percentValue } from "../../../hooks/index";
import { sizeValue, media, svgHeart, svgDecr, svgIncr } from "./static-data";
import Button from "../button";

import { useCountStore } from "../../../utils/store";

interface Props {
  item: Item;
}

const SingleItem: React.FC<Props> = ({ item }) => {
  const { count, increase, decrease } = useCountStore();

  return (
    <div className="container">
      <Backspace text="Single Item" />
      <div className={Style.single_item}>
        <div className={Style.content}>
          <img src={item.imgUrl} alt={item.name}></img>

          {item.variations[0]?.onSale && (
            <div className={Style.percent}>
              {percentValue(
                item.variations[0].price,
                item.variations[0].sailPrice
              )}
              {"% OFF"}
            </div>
          )}

          <div className={Style.info}>
            <h2>{item.name}</h2>
            <span className={Style.price}>
              {item.variations[0]?.onSale ? (
                <div className={Style.info}>
                  <span className={Style.price}>
                    ${item.variations[0].sailPrice.toFixed(2)}
                  </span>

                  <span className={Style.sailPrice}>
                    ${item.variations[0].price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <div className={Style.info}>
                  <span className={Style.price}>
                    ${item.variations[0]?.price.toFixed(2)}
                  </span>
                </div>
              )}
            </span>
            <span className={Style.line}></span>
            <span className={Style.short}>Short Description:</span>
            <p className={Style.description}>{item.description}</p>
            <span className={Style.size}>Size:</span>

            <ul className={Style.lists}>
              {sizeValue.map((e, index) => (
                <li className={Style.list} key={index}>
                  {e}
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
              Potter Plants
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
      </div>
    </div>
  );
};

export default SingleItem;
