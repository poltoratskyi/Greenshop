"use client";

import ModalWrapper from "../../../../components/shared/modal-wrapper";
import ModalForm from "../../../../components/shared/modal-forms";
import SignUp from "../../../../components/shared/modal-forms/sign-up";
import LogIn from "../../../../components/shared/modal-forms/log-in";

import { useUIStore } from "../../../../utils/store";

export default function Modal() {
  const modalAction = useUIStore((state) => state.modalAction);

  return (
    <ModalWrapper>
      <ModalForm>{modalAction ? <LogIn /> : <SignUp />}</ModalForm>
    </ModalWrapper>
  );
}
