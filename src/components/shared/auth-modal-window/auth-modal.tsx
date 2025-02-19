"use client";

import Style from "./auth-modal-window.module.scss";
import ModalContent from "../modal-content";
import { useUIStore } from "../../../store";
import SignUp from "../sign-up/sign-up";
import Login from "../login";

const AuthModal: React.FC = () => {
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  return (
    <>
      <div className={Style.overlay}></div>

      <div className={Style.modal}>
        <ModalContent title>
          {isModalActionOpen ? <Login /> : <SignUp />}
        </ModalContent>
      </div>
    </>
  );
};

export default AuthModal;
