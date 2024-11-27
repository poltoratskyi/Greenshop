import Style from "./modal-forms.module.scss";

import ModalContent from "./modal-content";

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={Style.overlay}></div>

      <div className={Style.modal}>
        <ModalContent title>{children}</ModalContent>
      </div>
    </>
  );
};

export default Modal;
