import { JSX } from "react";
import Img from "./image";
import Style from "./banner.module.scss";
import Button from "../../shared/button";
import { subtitle } from "./static-data";

interface Props {
  className?: string;
  value: string;
  width?: number;
  height?: number;
  svgRight?: JSX.Element;
  descr: string;
}

const Info: React.FC<Props> = ({
  className,
  value,
  width,
  height,
  svgRight,
  descr,
}) => {
  return (
    <div className={Style.content}>
      <div className={Style.info}>
        <span>{subtitle.subtitle}</span>
        <h1>
          Let’s Make a <br /> Better <mark>Planet</mark>
        </h1>
        <p>{descr}</p>

        <Button
          link
          linkValue="#"
          svgRight={svgRight}
          className={className}
          value={value}
        />
      </div>

      {width && (
        <Img imgUrl="/catalog/lily-min.png" width={width} height={height} />
      )}
    </div>
  );
};

export default Info;
