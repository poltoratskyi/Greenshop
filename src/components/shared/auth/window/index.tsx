"use client";

import ModalContent from "../content";
import { useUIStore } from "../../../../store";
import SignUp from "../sign-up/sign-up";
import Login from "../log-in";
import ModalContainer from "../container";

const Window: React.FC = () => {
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  return (
    <ModalContainer>
      <ModalContent title>
        {isModalActionOpen ? <Login /> : <SignUp />}
      </ModalContent>
    </ModalContainer>
  );
};

export default Window;
