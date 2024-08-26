import Link from "next/link";

import Style from "./cart.module.scss";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export const CartTotals = () => {
  return (
    <div className={Style.cart_totals}>
      <h2 className={Style.title}>Cart Totals</h2>

      <span className={Style.subTitle}>Coupon Apply</span>

      <Input
        btnClassName="coupon"
        location="coupon"
        inputPlaceholder="Enter coupon code here"
        btnText="Apply"
      />

      <div className={Style.result}>
        <p>Subtotal</p>
        <span>$2,683.00</span>
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
        <b>$2,699.00</b>
      </div>

      <Button button={true} className="checkout" value="Proceed To Checkout" />

      <Link href="/">Continue Shopping</Link>
    </div>
  );
};
