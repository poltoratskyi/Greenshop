import Style from "./search-items-result.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={Style.loader}>
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
