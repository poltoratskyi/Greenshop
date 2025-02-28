"use client";

import ModalContent from "../modal-content";
import { useUIStore } from "../../../store";
import SignUp from "../../shared/sign-up/sign-up";
import Login from "../../shared/login";
import ModalContainer from "../modal-container";

const AuthModal: React.FC = () => {
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  return (
    <ModalContainer>
      <ModalContent title>
        {isModalActionOpen ? <Login /> : <SignUp />}
      </ModalContent>
    </ModalContainer>
  );
};

export default AuthModal;
