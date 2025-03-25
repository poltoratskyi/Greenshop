"use client";

import { useUIStore } from "../../../../store";
import Style from "./error.module.scss";
import { svgClose } from "./static-data";

const Error: React.FC = () => {
  const isAuthErrorOpen = useUIStore((state) => state.isAuthErrorOpen);
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);
  const setIsAuthErrorOpen = useUIStore((state) => state.setIsAuthErrorOpen);

  return (
    <div
      className={
        isAuthErrorOpen
          ? ` ${Style.authError} ${Style.active} `
          : Style.authError
      }
    >
      <div className={Style.text}>
        {isModalActionOpen
          ? "Invalid email or password"
          : "The email you have provided is already associated with an account"}

        <div className={Style.close}>
          <span
            onClick={() => setIsAuthErrorOpen(false)}
            className={Style.close}
          >
            {svgClose}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error;
