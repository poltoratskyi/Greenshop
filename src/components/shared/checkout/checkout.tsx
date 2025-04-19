"use client";

import Pathname from "../../ui/pathname";
import Style from "./checkout.module.scss";
import Form from "./form";
import { useCartStore, useUIStore } from "../../../store";
import { OrderConfirmation } from "../../ui/order";
import { User } from "../../../types";
import { useEffect } from "react";
import Toast from "../toast";
import { useToastHandling } from "@/hooks";

interface Props {
  user?: User;
}

const Checkout: React.FC<Props> = ({ user }) => {
  const loadUserCart = useCartStore((state) => state.loadUserCart);
  const isOrderOpen = useUIStore((state) => state.isOrderOpen);

  const { isToastOpen, toastType, isSuccessToast, setIsToastOpen } =
    useToastHandling();

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
            address={user?.address || ""}
            apartment={user?.apartment || ""}
            city={user?.city || ""}
            state={user?.state || ""}
            country={user?.country || ""}
          />
        </div>
      </section>

      <Toast
        isOpen={isToastOpen}
        message={toastType}
        isSuccess={isSuccessToast}
        onClick={setIsToastOpen}
      />

      {isOrderOpen && <OrderConfirmation />}
    </>
  );
};

export default Checkout;
