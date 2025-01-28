"use client";

import Style from "./cart.module.scss";
import { useCartStore } from "../../../store";
import Empty from "../empty";

interface Props {
  children: React.ReactNode;
}

const Inner: React.FC<Props> = ({ children }) => {
  const cartItems = useCartStore((state) => state.cartItems);

  if (cartItems.length === 0) {
    return (
      <div className={Style.wrapper}>
        <Empty />
      </div>
    );
  }

  return <div className={Style.inner}>{children}</div>;
};

export default Inner;
