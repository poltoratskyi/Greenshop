"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Style from "./header.module.scss";
import { useUIStore } from "../../../utils/store";
import { svgCart, svgLogin, svgSearch } from "./static-data";

const Actions: React.FC = () => {
  const pathname = usePathname();
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  return (
    <div className={Style.actions}>
      <span onClick={() => setOpenSearch(true)}>{svgSearch}</span>

      <Link href="/cart">{svgCart}</Link>

      <Link
        style={{
          pointerEvents: pathname === "/login" ? "none" : "auto",
          opacity: pathname === "/login" ? 0.5 : 1,
        }}
        onClick={() => {
          document.body.style.overflow = "hidden";
          setOpenModal(true);
        }}
        className={Style.login}
        href="/login"
      >
        {svgLogin}
        Log In
      </Link>
    </div>
  );
};

export default Actions;
