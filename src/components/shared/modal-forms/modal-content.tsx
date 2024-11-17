"use client";

import { useRouter } from "next/navigation";

import { useUIStore } from "../../../utils/store";

import { svgClose } from "./static-data";

import Style from "./modal-forms.module.scss";

interface Props {
  title?: boolean;
  children: React.ReactNode;
}

const ModalContent: React.FC<Props> = ({ title, children }) => {
  const router = useRouter();

  const modalAction = useUIStore((state) => state.modalAction);

  const setToggleAction = useUIStore((state) => state.setToggleAction);
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  const closeModal = () => {
    router.back();
    setOpenModal(false);
    /* setShowMenu(true); */
    document.body.style.overflow = "auto";
  };
  return (
    <>
      {title && (
        <div className={Style.title}>
          <h2
            onClick={() => setToggleAction(true)}
            className={
              modalAction ? `${Style.text} ${Style.active}` : Style.text
            }
          >
            Log In
          </h2>

          <span>I</span>

          <h2
            onClick={() => setToggleAction(false)}
            className={
              !modalAction ? `${Style.text} ${Style.active}` : Style.text
            }
          >
            Sign Up
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
      )}

      <div className={Style.content}>{children}</div>

      <span className={Style.bottom_line}></span>
    </>
  );
};

export default ModalContent;
