"use client";

import { useRouter } from "next/navigation";
import Style from "./modal-content.module.scss";
import { svgClose } from "./static-data";
import { useUIStore } from "../../../store";

interface Props {
  title?: boolean;
  children: React.ReactNode;
}

const ModalContent: React.FC<Props> = ({ title, children }) => {
  const router = useRouter();

  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  const setIsModalActionOpen = useUIStore(
    (state) => state.setIsModalActionOpen
  );
  const setIsModalOpen = useUIStore((state) => state.setIsModalOpen);

  const closeModal = () => {
    router.back();
    setIsModalOpen(false);
  };

  return (
    <div className={Style.body}>
      {title && (
        <div className={Style.header}>
          <h2
            onClick={() => setIsModalActionOpen(true)}
            className={
              isModalActionOpen ? `${Style.title} ${Style.active}` : Style.title
            }
          >
            Log In
          </h2>

          <span className={Style.element}>I</span>

          <h2
            onClick={() => setIsModalActionOpen(false)}
            className={
              !isModalActionOpen
                ? `${Style.title} ${Style.active}`
                : Style.title
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

      <span className={Style.line}></span>
    </div>
  );
};

export default ModalContent;
