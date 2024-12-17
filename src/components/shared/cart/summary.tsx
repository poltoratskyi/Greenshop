"use client";

import Link from "next/link";

import Style from "./cart.module.scss";

import { useCartStore } from "../../../store";

const Summary: React.FC = () => {
  const subTotalAmount = useCartStore((state) => state.subtotalAmount);
  const totalAmount = useCartStore((state) => state.totalAmount);

  return (
    <>
      <div className={Style.result}>
        <p>Subtotal</p>
        <span>${subTotalAmount.toFixed(2)}</span>
      </div>

      <div className={Style.result}>
        <p>Coupon Discount</p>
        <p>(-) 00.00</p>
      </div>

      <div style={{ alignItems: "flex-start" }} className={Style.result}>
        <p>Shipping</p>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          $16.00
          <Link href="#">View shipping charge</Link>
        </span>
      </div>

      <div style={{ marginBottom: "30px" }} className={Style.result}>
        <mark>Total</mark>
        <b>${totalAmount.toFixed(2)} </b>
      </div>
    </>
  );
};

export default Summary;
