"use client";

import Link from "next/link";
import Style from "./order-confirmation.module.scss";
import { svgThanks } from "./static-data";
import { useUIStore } from "../../../../store";

const Info: React.FC = () => {
  const setIsOrderOpen = useUIStore((state) => state.setIsOrderOpen);

  return (
    <div className={Style.content}>
      <div className={Style.header}>
        {svgThanks}
        <h2 className={Style.title}>Your order has been received</h2>
      </div>

      <div className={Style.descr}>
        <p>
          Hello, your order is currently being processed. You will receive an
          email shortly with the details of your order.
        </p>
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
