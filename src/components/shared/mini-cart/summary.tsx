"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Skeleton from "../skeleton/mini-cart-summary";
import Style from "./mini-cart.module.scss";
import { useCartStore } from "../../../store";

const Summary: React.FC = () => {
  const pathname = usePathname();

  const isLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.cartItems);
  const subTotalAmount = useCartStore((state) => state.subtotalAmount);
  const totalAmount = useCartStore((state) => state.totalAmount);

  if (isLoading) {
    return (
      <>
        {isLoading &&
          [...new Array(1)].map((_, index: number) => (
            <Skeleton key={index} width="100%" height="185" uniqueKey="6" />
          ))}
      </>
    );
  }

  if (cartItems.length === 0) {
    return;
  }

  return (
    <div className={Style.summary}>
      <div className={Style.subtotal}>
        <p>Subtotal</p>
        <span>${subTotalAmount.toFixed(2)}</span>
      </div>

      <div className={Style.discount}>
        <p>Coupon Discount</p>
        <p>(-) 00.00</p>
      </div>

      <div className={Style.shipping}>
        <p>Shipping</p>
        <span>$16.00</span>
      </div>

      <div className={Style.total}>
        <p>Total</p>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <Link
        style={{
          pointerEvents: pathname === "/cart" ? "none" : "auto",
          opacity: pathname === "/cart" ? 0.5 : 1,
        }}
        className={Style.see_cart}
        href="/cart"
      >
        See Cart
      </Link>
    </div>
  );
};

export default Summary;
