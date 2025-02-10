"use client";

import Link from "next/link";
import Style from "./cart.module.scss";
import { useCartStore } from "../../../store/cart";

const Links: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <>
        <Link
          className={`${Style.checkout} ${Style.disabled}`}
          href="/checkout"
        >
          Proceed To Checkout
        </Link>

        <Link className={Style.continue} href="/#catalog">
          Continue Shopping
        </Link>
      </>
    );
  }

  return (
    <>
      <Link className={Style.checkout} href="/checkout">
        Proceed To Checkout
      </Link>

      <Link className={Style.continue} href="/#catalog">
        Continue Shopping
      </Link>
    </>
  );
};
export default Links;
