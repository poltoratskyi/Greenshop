"use client";

import ModalWrapper from "../../../../components/shared/modal-wrapper";
import ModalForm from "../../../../components/shared/modal-forms";
import SignUp from "../../../../components/shared/modal-forms/sign-up";
import LogIn from "../../../../components/shared/modal-forms/log-in";

import { useUIStore } from "../../../../store";

export default function Modal() {
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  return (
    <ModalWrapper>
      <ModalForm>{isModalActionOpen ? <LogIn /> : <SignUp />}</ModalForm>
    </ModalWrapper>
  );
}
