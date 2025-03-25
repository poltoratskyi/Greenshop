import Link from "next/link";
import Style from "./summary.module.scss";

interface Props {
  showShipping: boolean;
  subTotalAmount: number;
  totalAmount: number;
}

const Summary: React.FC<Props> = ({
  showShipping,
  subTotalAmount,
  totalAmount,
}) => {
  return (
    <>
      <div
        className={
          showShipping ? `${Style.subtotal} ${Style.margin}` : Style.subtotal
        }
      >
        <p>Subtotal</p>
        <span>${subTotalAmount.toFixed(2)}</span>
      </div>

      <div
        className={
          showShipping ? `${Style.coupon} ${Style.margin}` : Style.coupon
        }
      >
        <p>Coupon Discount</p>
        <span>$00.00</span>
      </div>

      <div
        className={
          showShipping ? `${Style.shipping} ${Style.margin}` : Style.shipping
        }
      >
        <p>Shipping</p>

        <span>
          $16.00
          {showShipping && <Link href="#">View shipping charge</Link>}
        </span>
      </div>

      <div
        className={
          showShipping ? `${Style.amount} ${Style.margin}` : Style.amount
        }
      >
        <mark>Total</mark>
        <b>${totalAmount.toFixed(2)} </b>
      </div>
    </>
  );
};

export default Summary;
