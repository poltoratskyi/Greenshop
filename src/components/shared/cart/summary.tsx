"use client";

import Link from "next/link";
import SummaryStyle from "../../ui/cart/summary/summary.module.scss";
import Skeleton from "../../ui/skeleton/cart-summary";
import { useCartStore } from "../../../store";
import { Summary } from "../../ui/cart";

const CartSummary: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const subTotalAmount = useCartStore((state) => state.subtotalAmount);
  const totalAmount = useCartStore((state) => state.totalAmount);

  if (isLoading) {
    return (
      <>
        <div className={`${SummaryStyle.subtotal} ${SummaryStyle.margin}`}>
          <p>Subtotal</p>

          {isLoading &&
            [...new Array(1)].map((_, index: number) => (
              <Skeleton key={index} width="60" height="100%" uniqueKey="7" />
            ))}
        </div>

        <div className={`${SummaryStyle.coupon} ${SummaryStyle.margin}`}>
          <p>Coupon Discount</p>
          <span>$00.00</span>
        </div>

        <div className={`${SummaryStyle.shipping} ${SummaryStyle.margin}`}>
          <p>Shipping</p>
          <span>
            {isLoading &&
              [...new Array(1)].map((_, index: number) => (
                <Skeleton key={index} width="60" height="24" uniqueKey="7" />
              ))}
            <Link href="#">View shipping charge</Link>
          </span>
        </div>

        <div className={`${SummaryStyle.amount} ${SummaryStyle.margin}`}>
          <mark>Total</mark>

          {isLoading &&
            [...new Array(1)].map((_, index: number) => (
              <Skeleton key={index} width="60" height="100%" uniqueKey="7" />
            ))}
        </div>
      </>
    );
  }

  return (
    <Summary
      showShipping
      subTotalAmount={subTotalAmount}
      totalAmount={totalAmount}
    />
  );
};

export default CartSummary;
