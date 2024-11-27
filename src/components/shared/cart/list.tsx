"use client";

import Link from "next/link";
import Image from "next/image";

import Style from "./cart.module.scss";

import catalog from "../../../data/catalog";

import { useCountStore } from "../../../utils/store";

import { svgDecr, svgIncr, svgTrash } from "./static-data";

const CartList: React.FC = () => {
  const { count, increase, decrease } = useCountStore();

  return (
    <div className={Style.items}>
      <ul className={Style.items_title}>
        <li style={{ width: "320px" }}>
          <h4>Products</h4>
        </li>

        <li style={{ width: "100px" }}>
          <h4>Price</h4>
        </li>

        <li style={{ width: "100px" }}>
          <h4>Quantity</h4>
        </li>

        <li style={{ width: "130px", marginLeft: "130px" }}>
          <h4>Total</h4>
        </li>
      </ul>

      <ul className={Style.lists}>
        {catalog.map((item) => (
          <li className={Style.list} key={item.id}>
            <div className={Style.layout}>
              <Link className={Style.img} href="#">
                <Image
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={item.imgUrl}
                  alt={item.name}
                />
              </Link>

              <div style={{ width: "200px" }}>
                <Link href="#">
                  <h3 className={Style.title}>{item.name}</h3>
                </Link>

                <p className={Style.sku}>
                  <span>SKU:</span>
                  {item.sku}
                </p>
              </div>

              {item.onSale ? (
                <span className={Style.price}>${item.sale.toFixed(2)}</span>
              ) : (
                <span className={Style.price}>${item.price.toFixed(2)}</span>
              )}

              <div className={Style.quantity}>
                <button onClick={() => decrease(item.id)}>{svgDecr}</button>

                <span>{count}</span>

                <button onClick={() => increase(item.id)}>{svgIncr}</button>
              </div>

              {item.onSale ? (
                <span className={Style.total}>${item.sale.toFixed(2)}</span>
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
