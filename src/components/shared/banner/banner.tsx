import Style from "./banner.module.scss";

import Info from "./info";
import Mobile from "./mobile";

import { descr } from "./static-data";

const Banner: React.FC = () => {
  return (
    <section className={Style.banner}>
      <div className="container">
        <Info
          descr={descr}
          className="banner"
          value="shop now"
          width={500}
          height={500}
        />

        {/* Media */}
        <Mobile />
      </div>
    </section>
  );
};

export default Banner;
