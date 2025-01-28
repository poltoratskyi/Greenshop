"use client";

import { useEffect } from "react";
import Style from "./cart.module.scss";
import Header from "./header";
import Item from "./item";
import Loader from "../loaders/default";
import { useCartStore } from "../../../store";

const List: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.cartItems);

  const loadUserCart = useCartStore((state) => state.loadUserCart);

  useEffect(() => {
    loadUserCart();
  }, []);

  if (isLoading) {
    return (
      <div className={Style.items}>
        <Header />

        <Loader cart />
      </div>
    );
  }

  return (
    <div className={Style.items}>
      <Header />

      <ul className={Style.lists}>
        {cartItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
