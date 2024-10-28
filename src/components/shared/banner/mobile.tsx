import Style from "./banner.module.scss";

import Info from "./info";

import { svgRight } from "./static-data";

const descr = "We are an online plant shop offering a wide range ";

const Mobile: React.FC = () => {
  return (
    <div className={Style.mobile}>
      <Info
        descr={descr}
        className="banner_mobile"
        svgRight={svgRight}
        value="shop now"
      />
    </div>
  );
};

export default Mobile;
