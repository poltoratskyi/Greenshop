import Style from "./suspense.module.scss";

const Suspense: React.FC = () => {
  return (
    <div className="container">
      <div className={Style.wrapper}>
        <div className={Style.suspense}>
          <div className={Style.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Suspense;
