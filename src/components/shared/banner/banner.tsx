import Style from "./banner.module.scss";
import Info from "./info";
import BannerMobile from "./mobile";
import { descr } from "./static-data";

const Banner: React.FC = () => {
  return (
    <section id="banner" className={Style.banner}>
      <div className="container">
        <Info descr={descr} value="Shop Now" width={600} height={600} />

        {/* Media */}
        <BannerMobile />
      </div>
    </section>
  );
};

export default Banner;
