"use client";

import Link from "next/link";

import Style from "./cart.module.scss";

import catalog from "../../../data/catalog";

import { useCountStore } from "../../../utils/store";

import { svgDecr, svgIncr, svgTrash } from "./static-data";

const CartList: React.FC = () => {
  const { count, increase, decrease } = useCountStore();

  return (
    <div className={Style.items}>
      <div className={Style.items_title}>
        <h2 style={{ width: "320px" }}>Products</h2>
        <h2 style={{ width: "100px" }}>Price</h2>
        <h2 style={{ width: "100px" }}>Quantity</h2>
        <h2 style={{ width: "130px", marginLeft: "130px" }}>Total</h2>
      </div>

      <ul className={Style.lists}>
        {catalog.map((item) => (
          <li className={Style.list} key={item.id}>
            <div className={Style.layout}>
              <Link className={Style.img} href="#">
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={item.imgUrl}
                  alt={item.name}
                />
              </Link>

              <div style={{ width: "200px" }}>
                <Link href="#">
                  <h2 className={Style.title}>{item.name}</h2>
                </Link>

                <p className={Style.sku}>
                  <span>SKU:</span>
                  {item.sku}
                </p>
              </div>

              {item.onSale ? (
                <span className={Style.price}>
                  ${item.sailPrice.toFixed(2)}
                </span>
              ) : (
                <span className={Style.price}>${item.price.toFixed(2)}</span>
              )}

              <div className={Style.quantity}>
                <button onClick={() => decrease(item.id)}>{svgDecr}</button>

                <span>{count}</span>

                <button onClick={() => increase(item.id)}>{svgIncr}</button>
              </div>

              {item.onSale ? (
                <span className={Style.total}>
                  ${item.sailPrice.toFixed(2)}
                </span>
              ) : (
                <span className={Style.total}>${item.price.toFixed(2)}</span>
              )}

              {svgTrash}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
