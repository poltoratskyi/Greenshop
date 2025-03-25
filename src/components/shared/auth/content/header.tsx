"use client";

import Style from "./modal-content.module.scss";
import { svgClose } from "./static-data";
import { useUIStore } from "../../../../store";
import { useCloseModalAuthentication } from "../../../../hooks";

interface Props {
  title?: boolean;
}

const Header: React.FC<Props> = ({ title }) => {
  const isModalActionOpen = useUIStore((state) => state.isModalActionOpen);

  const setIsModalActionOpen = useUIStore(
    (state) => state.setIsModalActionOpen
  );

  const setIsAuthErrorOpen = useUIStore((state) => state.setIsAuthErrorOpen);

  const { closeModal } = useCloseModalAuthentication();

  const onChangeModal = (boolean: boolean) => {
    setIsModalActionOpen(boolean);
    setIsAuthErrorOpen(false);
  };
  return (
    <>
      {title && (
        <div className={Style.header}>
          <h2
            onClick={() => onChangeModal(true)}
            className={
              isModalActionOpen ? `${Style.title} ${Style.active}` : Style.title
            }
          >
            Log In
          </h2>

          <span className={Style.element}>I</span>

          <h2
            onClick={() => onChangeModal(false)}
            className={
              !isModalActionOpen
                ? `${Style.title} ${Style.active}`
                : Style.title
            }
          >
            Sign Up
          </h2>

          <span onClick={() => closeModal()} className={Style.close}>
            {svgClose}
          </span>
        </div>
      )}
    </>
  );
};
export default Header;
