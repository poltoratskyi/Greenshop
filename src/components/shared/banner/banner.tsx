import Style from "./banner.module.scss";

import { Info } from "./info";
import { Mobile } from "./mobile";

const descr =
  "  We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!";

export const Banner: React.FC = () => {
  return (
    <div className={Style.banner}>
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
    </div>
  );
};
