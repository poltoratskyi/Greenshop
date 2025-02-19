"use client";

import { useEffect } from "react";
import Pathname from "../pathname";
import Style from "./checkout.module.scss";
import Form from "./form";
import { useCartStore } from "../../../store";

const Checkout: React.FC = () => {
  const loadUserCart = useCartStore((state) => state.loadUserCart);

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
    </>
  );
};

export default Checkout;
