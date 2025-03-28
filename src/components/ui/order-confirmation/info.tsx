"use client";

import Link from "next/link";
import Style from "./order-confirmation.module.scss";
import { svgThanks } from "./static-data";
import { useOrderStore, useUIStore } from "../../../store";
import { useEffect } from "react";

const Info: React.FC = () => {
  const setIsOrderOpen = useUIStore((state) => state.setIsOrderOpen);
  const isOrderSuccess = useUIStore((state) => state.isOrderSuccess);

  const order = useOrderStore((state) => state.order);
  const loadUserOrder = useOrderStore((state) => state.loadUserOrder);

  useEffect(() => {
    loadUserOrder();
  }, []);

  return (
    <div className={Style.content}>
      <div className={Style.header}>
        {svgThanks}
        <h2 className={Style.title}>
          {isOrderSuccess
            ? "Your order has been received"
            : "Oops! Something went wrong"}
        </h2>
      </div>

      <div className={Style.descr}>
        {isOrderSuccess ? (
          <p>
            Hello, <span className={Style.mark}>{order?.firstName} </span>
            your order is currently being processed. You will receive an email
            shortly with the details of your order.
          </p>
        ) : (
          <p>
            There was an issue with your order. We could not process it at this
            time. Please try again later or contact support if the issue
            persists.
          </p>
        )}
      </div>

      <Link
        className={Style.link}
        href="/"
        onClick={() => setIsOrderOpen(false)}
      >
        Home
      </Link>
    </div>
  );
};

export default Info;
