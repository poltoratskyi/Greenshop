import { Img } from "./image";

import Style from "./banner.module.scss";

import { Button } from "../../ui/button";

interface Props {
  className?: string;
  value: string;
  width?: number;
  height?: number;
  svgRight?: JSX.Element;
  descr: string;
}

export const Info: React.FC<Props> = ({
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
        <span>Welcome to GreenShop</span>
        <h1>
          Let’s Make a <br /> Better <mark>Planet</mark>
        </h1>
        <p>{descr}</p>

        <Button
          link={true}
          svgRight={svgRight}
          className={className}
          value={value}
        />
      </div>

      {width && (
        <Img imgUrl="/catalog/Lily-min.png" width={width} height={height} />
      )}
    </div>
  );
};
