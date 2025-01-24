"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./cart.module.scss";

import { useUIStore } from "../../../store";

const data = {
  title: "Your cart is empty",
  subtitle: "To view your cart, please sign in to your account.",
  login: "Log In",
  continue: "Or continue shopping",
};

const Empty: React.FC = () => {
  const pathname = usePathname();

  const setOpenModal = useUIStore((state) => state.setOpenModal);

  return (
    <div className={Style.empty}>
      <h4>{data.title}</h4>

      <p>{data.subtitle}</p>

      <Link
        style={{
          pointerEvents: pathname === "/login" ? "none" : "auto",
          opacity: pathname === "/login" ? 0.5 : 1,
        }}
        onClick={() => {
          setOpenModal(true);
        }}
        className={Style.login}
        href="/login"
      >
        {data.login}
      </Link>

      <Link href="/#catalog">
        <span>{data.continue}</span>
      </Link>
    </div>
  );
};

export default Empty;
