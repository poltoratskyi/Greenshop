import Style from "./container.module.scss";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};

export default Container;
