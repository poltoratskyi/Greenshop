"use client";

import { usePathname } from "next/navigation";

import Style from "./mobile-header.module.scss";

const SaleInfo: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" &&
        pathname !== "/login" &&
        pathname !== "/category" && (
          <h4 className={Style.text}>Summer sale - up to 20% off!</h4>
        )}
    </>
  );
};

export default SaleInfo;
