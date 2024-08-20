"use client";

import Link from "next/link";
import Style from "./cart.module.scss";

import { catalog } from "../../../data/catalog";
import { useState } from "react";

const svgDecr = (
  <svg
    height={10}
    width={10}
    x="0px"
    y="0px"
    viewBox="0 0 455 455"
    enableBackground="new 0 0 455 455;"
    fill="#000"
  >
    <rect y="212.5" width="455" height="30"></rect>
  </svg>
);

const svgIncr = (
  <svg
    height={10}
    width={10}
    x="0px"
    y="0px"
    viewBox="0 0 455 455"
    enableBackground="new 0 0 455 455;"
  >
    <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 "></polygon>
  </svg>
);

const svgDed = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408"
      stroke="#727272"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.3651 6.47979H4.2146"
      stroke="#727272"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979"
      stroke="#727272"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CartList = () => {
  const [quantity, setQuantity] = useState(1);

  const setQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  const deductQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ul className={Style.cart_lists}>
      <h2 className={Style.header}>Products</h2>

      {catalog.slice(0, 1).map((item) => (
        <li className={Style.list} key={item.id}>
          <div className={Style.layout}>
            <div className={Style.img}>
              <img src={item.imgUrl} alt={item.name} />

              <div>
                <Link href="#">
                  <h2 className={Style.title}>{item.name}</h2>
                </Link>

                <p className={Style.sku}>
                  <span>SKU:</span>
                  {item.sku}
                </p>
              </div>
            </div>

            {item.onSale ? (
              <span className={Style.price}>${item.sailPrice.toFixed(2)}</span>
            ) : (
              <span className={Style.price}>${item.price.toFixed(2)}</span>
            )}

            <div className={Style.quantity}>
              <button onClick={() => deductQuantityHandler()}>{svgDecr}</button>

              <span>{quantity}</span>

              <button onClick={() => setQuantityHandler()}>{svgIncr}</button>
            </div>

            {item.onSale ? (
              <span className={Style.total}>${item.sailPrice.toFixed(2)}</span>
            ) : (
              <span className={Style.total}>${item.price.toFixed(2)}</span>
            )}

            <span style={{ textAlign: "center", cursor: "pointer" }}>
              {svgDed}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
