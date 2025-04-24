import { advData } from "./static-data";
import Card from "./card";

const Adv: React.FC = () => {
  return (
    <section className="my-24 max-xs:my-5">
      <div className="container">
        <div className="flex items-center gap-8 max-xs:gap-5 max--xs:flex-col">
          {advData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adv;
