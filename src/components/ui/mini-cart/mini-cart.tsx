"use client";

import { useEffect } from "react";
import Style from "./mini-cart.module.scss";
import { CartItem } from "../../../types";
import Skeleton from "../skeleton/mini-cart";
import List from "./list";
import { useCartStore } from "../../../store";
import Empty from "../../shared/empty";

const MiniCart: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const isLoading = useCartStore((state) => state.isLoading);
  const loadUserCart = useCartStore((state) => state.loadUserCart);

  useEffect(() => {
    loadUserCart();
  }, []);

  if (isLoading) {
    return (
      <ul className={Style.items}>
        {isLoading &&
          [...new Array(1)].map((_, index: number) => (
            <Skeleton key={index} width="100%" height="165" uniqueKey="5" />
          ))}
      </ul>
    );
  }

  if (cartItems.length === 0) {
    return <Empty />;
  }

  return (
    <ul className={Style.items}>
      {cartItems.map((item: CartItem) => (
        <li className={Style.list} key={item.id}>
          <List {...item} />
        </li>
      ))}
    </ul>
  );
};

export default MiniCart;
