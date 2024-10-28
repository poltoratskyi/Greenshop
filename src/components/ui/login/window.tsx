"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Style from "./login.module.scss";

import Register from "./register";
import Login from "./login";

import { useUIStore } from "../../../utils/store";

import { svgClose } from "./static-data";

const Window: React.FC = () => {
  const router = useRouter();

  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const setShowMenu = useUIStore((state) => state.setShowMenu);
  const [toggleAction, setToggleAction] = useState(true);

  const closeModal = () => {
    router.back();
    setOpenModal(false);
    setShowMenu(true);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={Style.window_wrapper}>
      <div className={Style.overlay}>
        <div className={Style.window}>
          <div className={Style.title}>
            <h2
              onClick={() => setToggleAction(true)}
              className={
                toggleAction ? `${Style.text} ${Style.active}` : Style.text
              }
            >
              Login
            </h2>

            <span>I</span>

            <h2
              onClick={() => setToggleAction(false)}
              className={
                !toggleAction ? `${Style.text} ${Style.active}` : Style.text
              }
            >
              Register
            </h2>

            <div
              onClick={() => {
                closeModal();
              }}
              className={Style.close}
            >
              {svgClose}
            </div>
          </div>

          <div className={Style.content}>
            {toggleAction ? <Login /> : <Register />}
          </div>

          <span className={Style.bottom_line}></span>
        </div>
      </div>
    </div>
  );
};

export default Window;
