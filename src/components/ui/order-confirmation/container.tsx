"use client";

import Overlay from "@/components/ui/overlay";
import Style from "./order-confirmation.module.scss";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Overlay isVisible={true} />

      <div className={Style.order}>{children}</div>
    </>
  );
};

export default Container;
