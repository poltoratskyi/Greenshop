import Style from "./title-wrapper.module.scss";

interface Props {
  children: React.ReactNode;
  title: string;
  text?: boolean;
}

const Title: React.FC<Props> = ({ children, title, text }) => {
  return (
    <div className={Style.outline}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>{title}</h2>
      </div>

      {text ? <p className={Style.text}>{children}</p> : <>{children}</>}
    </div>
  );
};

export default Title;
