import Style from "./wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className={Style.wrapper}>{children}</div>;
};

export default Wrapper;
