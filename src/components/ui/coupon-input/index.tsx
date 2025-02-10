import Style from "./coupon.module.scss";
import Button from "../button";

const CouponInput: React.FC = () => {
  return (
    <div className={Style.block}>
      <label className={Style.subtitle} htmlFor="couponCode">
        Coupon Apply
      </label>

      <div style={{ display: "flex", marginBottom: "30px" }}>
        <input
          id="couponCode"
          name="couponCode"
          type="text"
          className={Style.coupon}
          placeholder="Enter coupon code here"
          autoComplete="off"
        />

        <Button button className="coupon" value="Apply" />
      </div>
    </div>
  );
};

export default CouponInput;
