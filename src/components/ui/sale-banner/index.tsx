import Style from "./sale-banner.module.scss";
import SaleInfo from "./sale-info";

const SaleBanner: React.FC = () => {
  return (
    <div id="top-info" className={Style.top_info}>
      <SaleInfo />

      <div className="container">
        <p className={`${Style.text} ${Style.delivered}`}>
          Fresh flowers delivered to your door!
        </p>
      </div>
    </div>
  );
};

export default SaleBanner;
