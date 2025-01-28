import Img from "./image";
import Style from "./banner.module.scss";
import { subtitle } from "./static-data";
import Link from "next/link";

interface Props {
  value: string;
  width?: number;
  height?: number;
  descr: string;
}

const Info: React.FC<Props> = ({ value, width, height, descr }) => {
  return (
    <div className={Style.content}>
      <div className={Style.info}>
        <span>{subtitle.subtitle}</span>
        <h1>
          Let’s Make a <br /> Better <mark>Planet</mark>
        </h1>
        <p>{descr}</p>

        <Link href="#">{value}</Link>
      </div>

      {width && (
        <Img imgUrl="/catalog/lily-min.png" width={width} height={height} />
      )}
    </div>
  );
};

export default Info;
