import Style from "./modal-forms.module.scss";

interface Props {
  children: React.ReactNode;
}

const ModalWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className={Style.modal_wrapper}>
      <div className={Style.overlay}>
        <div className={Style.modal}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
