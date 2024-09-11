"use client";

import { useState } from "react";

import Style from "./modal.module.scss";

import Register from "./register";
import Login from "./login";

import { useUIStore } from "../../../utils/store";

const svgClose = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 513.552 513.552"
    enableBackground=":new 0 0 513.552 513.552;"
    fill="#46a358"
  >
    <g>
      <g>
        <path d="M510.132,489.755c-0.476-0.556-0.995-1.075-1.552-1.552L276.9,256.382l231.822-231.68c5.577-5.577,5.577-14.619,0-20.196 c-5.577-5.577-14.619-5.577-20.196,0l-231.68,231.822L25.167,4.506c-5.577-5.577-14.619-5.577-20.196,0s-5.577,14.619,0,20.196 l231.822,231.68L4.972,488.062c-5.966,5.109-6.661,14.087-1.552,20.053c5.109,5.966,14.087,6.661,20.053,1.552 c0.556-0.476,1.075-0.995,1.552-1.552l231.822-231.68l231.68,231.822c5.109,5.966,14.087,6.661,20.053,1.552 C514.546,504.699,515.241,495.721,510.132,489.755z"></path>
      </g>
    </g>
  </svg>
);

const Modal: React.FC = () => {
  const openModal = useUIStore((state) => state.openModal);
  const setOpenModal = useUIStore((state) => state.setOpenModal);
  const setShowMenu = useUIStore((state) => state.setShowMenu);
  const [toggleAction, setToggleAction] = useState(true);

  return (
    <div
      className={`${
        openModal ? `${Style.modal} ${Style.visible}` : Style.modal
      }`}
    >
      <div className={Style.content}>
        <div
          onClick={() => {
            document.body.style.overflow = "auto";
            setOpenModal(false);
            setShowMenu(true);
          }}
          className={Style.close}
        >
          {svgClose}
        </div>

        <div className={Style.title}>
          <h2
            onClick={() => setToggleAction(true)}
            className={
              toggleAction ? `${Style.login} ${Style.active}` : Style.login
            }
          >
            Login
          </h2>

          <span>I</span>

          <h2
            onClick={() => setToggleAction(false)}
            className={
              !toggleAction
                ? `${Style.register} ${Style.active}`
                : Style.register
            }
          >
            Register
          </h2>
        </div>

        {toggleAction ? <Login /> : <Register />}
      </div>

      <div className={Style.bottom_line}></div>
    </div>
  );
};

export default Modal;
