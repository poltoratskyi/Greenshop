interface Props {
  children: React.ReactNode;
}

const ModalWrapper: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalWrapper;
