import Style from "./modal-container.module.scss";

interface Props {
  children: React.ReactNode;
}

const ModalContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={Style.overlay}></div>

      <div className={Style.modal}>{children}</div>
    </>
  );
};

export default ModalContainer;
