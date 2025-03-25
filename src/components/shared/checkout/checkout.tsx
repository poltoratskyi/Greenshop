"use client";

import { useEffect } from "react";
import Pathname from "../../ui/pathname";
import Style from "./checkout.module.scss";
import Form from "./form";
import { useCartStore, useUIStore } from "../../../store";
import { OrderConfirmation } from "../../ui/order-confirmation";
import { User } from "@/types";

interface Props {
  user?: User;
}

const Checkout: React.FC<Props> = ({ user }) => {
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
          <Form
            firstName={user?.firstName || ""}
            lastName={user?.lastName || ""}
            email={user?.email || ""}
            phone={user?.phone || ""}
          />
        </div>
      </section>

      {isOrderSuccess && isOrderOpen && <OrderConfirmation />}
    </>
  );
};

export default Checkout;
