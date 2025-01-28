import Style from "./adv.module.scss";
import { advData } from "./static-data";
import Card from "./card";

const Adv: React.FC = () => {
  return (
    <section className={Style.adv}>
      <div className="container">
        <div className={Style.content}>
          {advData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adv;
