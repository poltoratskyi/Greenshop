import Style from "./single-item.module.scss";

interface Props {
  children: React.ReactNode;
  title: string;
}

const SingleItemWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={Style.outline}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>{title}</h2>
      </div>

      {children}
    </div>
  );
};

export default SingleItemWrapper;
