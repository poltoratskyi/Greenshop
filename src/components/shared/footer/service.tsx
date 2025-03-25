import Style from "./footer.module.scss";
import Newsletter from "./newsletters";
import { serviceText } from "./static-data";

const Service: React.FC = () => {
  return (
    <div className={Style.service}>
      <div className={Style.label}>
        <div className={Style.info}>
          {serviceText.map((item, index: number) => (
            <div className={Style.inner} key={index}>
              <>{item.svg}</>

              <h3 className={Style.title}>{item.title}</h3>

              <p className={Style.descr}>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <Newsletter />
      </div>
    </div>
  );
};

export default Service;
