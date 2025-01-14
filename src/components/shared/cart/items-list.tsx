"use client";

import { useEffect } from "react";

import Style from "./cart.module.scss";

import CartHeader from "./cart-header";
import CartItem from "./cart-item";
import Loader from "../../shared/loaders/default";
import { useCartStore } from "../../../store";

const ItemsList: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.cartItems);

  const loadUserCart = useCartStore((state) => state.loadUserCart);

  useEffect(() => {
    loadUserCart();
  }, []);

  if (isLoading) {
    return (
      <div className={Style.items}>
        <CartHeader />

        <Loader cart />
      </div>
    );
  }

  return (
    <div className={Style.items}>
      <CartHeader />

      <ul className={Style.lists}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
