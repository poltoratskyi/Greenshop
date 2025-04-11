// components/ui/OrderDetailItem.tsx

import React from "react";
import Style from "./order-details-item.module.scss";

interface Props {
  label: string;
  value: React.ReactNode;
  className: string;
}

const OrderDetailsItem: React.FC<Props> = ({ label, value, className }) => {
  const spanClass = `${Style[className]}`;

  return (
    <div className={Style.box}>
      {label}: <span className={spanClass}>{value}</span>
    </div>
  );
};

export default OrderDetailsItem;
