import Style from "./coupon.module.scss";

const CouponInput: React.FC = () => {
  return (
    <div style={{ display: "flex", marginBottom: "30px" }}>
      <input
        id="couponCode"
        name="couponCode"
        type="text"
        className={Style.coupon}
        placeholder="Enter coupon code here"
        autoComplete="off"
      />

      <button className={Style.coupon_button}>Apply</button>
    </div>
  );
};

export default CouponInput;
