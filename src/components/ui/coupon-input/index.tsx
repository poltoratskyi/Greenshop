import Style from "./coupon.module.scss";
import CartStyle from "../../shared/cart/cart.module.scss";
import Button from "../../../components/shared/button";

const CouponInput: React.FC = () => {
  return (
    <>
      <label className={CartStyle.subtitle} htmlFor="couponCode">
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
    </>
  );
};

export default CouponInput;
