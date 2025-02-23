import Style from "./common-form-elements.module.scss";

interface Props {
  children: React.ReactNode;
}

const Block: React.FC<Props> = ({ children }) => {
  return <div className={Style.block}>{children}</div>;
};

export default Block;
