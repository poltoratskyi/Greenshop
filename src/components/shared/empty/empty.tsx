"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./empty.module.scss";
import { useUIStore } from "../../../store";
import { emptyData } from "./static-data";

const Empty: React.FC = () => {
  const pathname = usePathname();

  const setIsModalOpen = useUIStore((state) => state.setIsModalOpen);

  return (
    <div className={Style.empty}>
      <h4>{emptyData.title}</h4>

      <p>{emptyData.subtitle}</p>

      <Link
        style={{
          pointerEvents: pathname === "/login" ? "none" : "auto",
          opacity: pathname === "/login" ? 0.5 : 1,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
        className={Style.login}
        href="/login"
      >
        {emptyData.login}
      </Link>

      <Link href="/#catalog">
        <span>{emptyData.continue}</span>
      </Link>
    </div>
  );
};

export default Empty;
