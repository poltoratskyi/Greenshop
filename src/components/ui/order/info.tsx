"use client";

import Link from "next/link";
import Style from "./order.module.scss";
import { svgThanks } from "./static-data";
import { useUIStore } from "../../../store";

const Info: React.FC = () => {
  const isOrderSuccess = useUIStore((state) => state.isOrderSuccess);

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
            Your order is currently being processed. You will receive an email
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

      <Link className={Style.link} href="/">
        Home
      </Link>
    </div>
  );
};

export default Info;
