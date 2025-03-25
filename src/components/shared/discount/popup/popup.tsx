"use client";

import Style from "./popup.module.scss";
import Form from "./form";
import { useUIStore } from "../../../../store";
import Info from "./info";

const Popup: React.FC = () => {
  const isDiscountPopupOpen = useUIStore((state) => state.isDiscountPopupOpen);

  return (
    <div
      className={`${
        isDiscountPopupOpen
          ? `${Style.discount} ${Style.active}`
          : Style.discount
      }`}
    >
      <Info />

      <Form />
    </div>
  );
};

export default Popup;
