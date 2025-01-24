import Link from "next/link";

import Style from "./cart.module.scss";

import CouponInput from "../../ui/coupon-input";

import Summary from "./summary";

const data = {
  title: "Cart Totals",
  continue: "Continue Shopping",
};

const Review: React.FC = () => {
  return (
    <div className={Style.review}>
      <h2 className={Style.review_title}>{data.title}</h2>

      <CouponInput />

      <Summary />

      <Link className={Style.continue} href="/#catalog">
        {data.continue}
      </Link>
    </div>
  );
};

export default Review;
