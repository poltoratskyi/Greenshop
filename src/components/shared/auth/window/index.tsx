"use client";

import Content from "../content";
import { useUIStore } from "../../../../store";
import SignUp from "../sign-up/sign-up";
import Login from "../log-in";
import Container from "../container";
import Toast from "../../toast";
import { useToastHandling } from "@/lib/client";
import Overlay from "../../../ui/overlay";

const Window: React.FC = () => {
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  const { isToastOpen, toastType, isSuccessToast, setIsToastOpen } =
    useToastHandling();

  return (
    <>
      <Overlay isVisible={true} />

      <Container>
        <Content title>{isModalActionOpen ? <Login /> : <SignUp />}</Content>
      </Container>

      <Toast
        isOpen={isToastOpen}
        message={toastType}
        isSuccess={isSuccessToast}
        onClick={setIsToastOpen}
      />
    </>
  );
};

export default Window;
