import ModalContent from "./modal-content";

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  return <ModalContent title>{children}</ModalContent>;
};

export default Modal;
