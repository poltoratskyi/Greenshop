import Style from "./container.module.scss";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className={Style.modal}>{children}</div>;
};

export default Container;
