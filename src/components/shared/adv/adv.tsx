import Style from "./adv.module.scss";
import { advData } from "./static-data";
import AdvCard from "./adv-cart";

const Adv: React.FC = () => {
  return (
    <section className={Style.adv}>
      <div className="container">
        <div className={Style.content}>
          {advData.map((item) => (
            <AdvCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adv;
