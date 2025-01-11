"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./cart.module.scss";

import { useUIStore } from "../../../store";

const Empty: React.FC = () => {
  const pathname = usePathname();

  const setOpenModal = useUIStore((state) => state.setOpenModal);

  return (
    <div className={Style.empty}>
      <h4>Your cart is empty</h4>

      <p>To view your cart, please sign in to your account.</p>

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
        Log In
      </Link>

      <Link href="/#catalog">
        <span>Or continue shopping</span>
      </Link>
    </div>
  );
};

export default Empty;
