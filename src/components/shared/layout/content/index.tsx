import Style from "./content.module.scss";

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <div className={Style.content}>{children}</div>;
};

export default Content;
