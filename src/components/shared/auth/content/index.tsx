import Style from "./modal-content.module.scss";

import Header from "./header";

interface Props {
  title?: boolean;
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={Style.body}>
      <Header title={title} />

      <div className={Style.content}>{children}</div>

      <span className={Style.line}></span>
    </div>
  );
};

export default Content;
