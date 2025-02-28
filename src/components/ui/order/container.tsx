"use client";

import { useClickAway } from "react-use";
import Style from "./order.module.scss";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useUIStore } from "../../../store";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  const setIsOrderOpen = useUIStore((state) => state.setIsOrderOpen);

  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useClickAway(ref, () => {
    setIsOrderOpen(false);
    router.push("/");
  });

  return (
    <>
      <div className={Style.overlay}></div>

      <div ref={ref} className={Style.order}>
        {children}
      </div>
    </>
  );
};

export default Container;
