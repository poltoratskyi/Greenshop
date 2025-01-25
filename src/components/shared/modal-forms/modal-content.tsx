"use client";

import { useRouter } from "next/navigation";
import Style from "./modal-forms.module.scss";
import { svgClose } from "./static-data";
import { useUIStore } from "../../../store";

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
  };

  return (
    <>
      {title && (
        <div className={Style.header}>
          <h2
            onClick={() => setToggleAction(true)}
            className={
              modalAction ? `${Style.title} ${Style.active}` : Style.title
            }
          >
            Log In
          </h2>

          <span className={Style.element}>I</span>

          <h2
            onClick={() => setToggleAction(false)}
            className={
              !modalAction ? `${Style.title} ${Style.active}` : Style.title
            }
          >
            Sign Up
          </h2>

          <span
            onClick={() => {
              closeModal();
            }}
            className={Style.close}
          >
            {svgClose}
          </span>
        </div>
      )}

      <div className={Style.content}>{children}</div>

      <span className={Style.bottom_line}></span>
    </>
  );
};

export default ModalContent;
