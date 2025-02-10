"use client";

import { useCartStore } from "../../../store";
import Empty from "../empty";

interface Props {
  children: React.ReactNode;
}

const CartEmpty: React.FC<Props> = ({ children }) => {
  const cartItems = useCartStore((state) => state.cartItems);

  if (cartItems.length === 0) {
    return <Empty />;
  }

  return children;
};

export default CartEmpty;
