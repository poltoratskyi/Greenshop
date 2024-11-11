"use client";

import React from "react";

import ModalWrapper from "../../../../components/shared/modal-forms/modal-wrapper";
import ModalForm from "../../../../components/shared/modal-forms";
import SignUp from "../../../../components/shared/modal-forms/sign-up";
import LogIn from "../../../../components/shared/modal-forms/log-in";

import { useUIStore } from "../../../../utils/store";

export default function Modal() {
  const toggleAction = useUIStore((state) => state.toggleAction);

  return (
    <ModalWrapper>
      <ModalForm>{toggleAction ? <LogIn /> : <SignUp />}</ModalForm>
    </ModalWrapper>
  );
}
