import Link from "next/link";

import Style from "./cart.module.scss";

import CouponInput from "../../ui/coupon-input";

import Summary from "./summary";

const Review: React.FC = () => {
  return (
    <div className={Style.review}>
      <h2 className={Style.review_title}>Cart Totals</h2>

      <CouponInput />

      <Summary />

      <Link className={Style.continue} href="/#catalog">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Review;
