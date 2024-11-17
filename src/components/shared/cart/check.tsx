import Link from "next/link";

import Style from "./cart.module.scss";

import Button from "../button";
import CouponInput from "../../ui/coupon-input";

const CartCheck: React.FC = () => {
  return (
    <div className={Style.check}>
      <h2 className={Style.check_title}>Cart Totals</h2>

      <label className={Style.subtitle} htmlFor="couponCode">
        Coupon Apply
      </label>

      <CouponInput />

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

      <Button
        link
        linkValue="#"
        className="checkout"
        value="Proceed To Checkout"
      />

      <Link className={Style.continue} href="/">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartCheck;
