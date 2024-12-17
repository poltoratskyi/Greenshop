import Link from "next/link";

import Style from "./cart.module.scss";

import Button from "../button";
import CouponInput from "../../ui/coupon-input";

import Summary from "./summary";

const Review: React.FC = () => {
  return (
    <div className={Style.review}>
      <h2 className={Style.review_title}>Cart Totals</h2>

      <label className={Style.subtitle} htmlFor="couponCode">
        Coupon Apply
      </label>

      <CouponInput />

      <Summary />

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

export default Review;
