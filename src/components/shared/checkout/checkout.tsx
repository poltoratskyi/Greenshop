"use client";

import { useEffect } from "react";
import Pathname from "../../ui/pathname";
import Style from "./checkout.module.scss";
import Form from "./form";
import { useCartStore, useUIStore } from "../../../store";
import { Order } from "../../ui/order";

const Checkout: React.FC = () => {
  const loadUserCart = useCartStore((state) => state.loadUserCart);
  const isOrderOpen = useUIStore((state) => state.isOrderOpen);
  const isOrderSuccess = useUIStore((state) => state.isOrderSuccess);

  useEffect(() => {
    loadUserCart();
  }, []);

  return (
    <>
      <Pathname second="Checkout" />

      <section className={Style.checkout}>
        <div className="container">
          <Form />
        </div>
      </section>

      {isOrderSuccess && isOrderOpen && <Order />}
    </>
  );
};

export default Checkout;
