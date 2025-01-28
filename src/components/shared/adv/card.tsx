import Image from "next/image";
import Button from "../../ui/button";
import { svgRight } from "./static-data";
import Style from "./adv.module.scss";
import Link from "next/link";

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
  descr: string;
}

const Card: React.FC<Props> = ({ imgUrl, title, subTitle, descr }) => {
  return (
    <div className={Style.info}>
      <div className={Style.img}>
        <Image
          width={600}
          height={600}
          style={{
            width: "100%",
            height: "auto",
          }}
          src={imgUrl}
          alt={title}
        />
      </div>

      <div className={Style.wrapper}>
        <h3 className={Style.title}>
          {title} <br /> & {subTitle}
        </h3>

        <p className={Style.descr}>{descr}</p>

        <Link href="#">Find More {svgRight}</Link>
      </div>
    </div>
  );
};

export default Card;
