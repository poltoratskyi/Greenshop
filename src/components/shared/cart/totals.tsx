import Link from "next/link";

import Style from "./cart.module.scss";

import Button from "../../ui/button";
import Input from "../../ui/input";

const CartTotals: React.FC = () => {
  return (
    <div className={Style.cart_totals}>
      <h2 className={Style.title}>Cart Totals</h2>

      <form action="#" method="post">
        <label className={Style.subTitle} htmlFor="couponCode">
          Coupon Apply
        </label>

        <div style={{ display: "flex", marginBottom: "30px" }}>
          <Input
            id="couponCode"
            name="couponCode"
            type="text"
            className="coupon"
            inputPlaceholder="Enter coupon code here"
          />

          <Button button={true} className="coupon" value="Apply" />
        </div>
      </form>

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

      <Button link={true} className="checkout" value="Proceed To Checkout" />

      <Link className={Style.continue} href="/">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartTotals;
