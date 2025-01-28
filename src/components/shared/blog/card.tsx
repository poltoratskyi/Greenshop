import Image from "next/image";
import Link from "next/link";
import Style from "./blog.module.scss";
import { svgRight } from "./static-data";

interface Props {
  id: number;
  imgUrl: string;
  date: string;
  heading: string;
  title: string;
  descr: string;
  link: string;
}

const Card: React.FC<Props> = ({
  id,
  imgUrl,
  date,
  heading,
  title,
  descr,
  link,
}) => {
  return (
    <div className={Style.wrapper}>
      <Image
        width={600}
        height={600}
        style={{
          width: "100%",
          height: "auto",
        }}
        src={imgUrl}
        alt={title}
        priority={id === 1}
      />

      <div className={Style.info}>
        <div className={Style.date}>
          <span>{date}</span>
          <span className={Style.element}>|</span>
          <span>{heading}</span>
        </div>

        <h3>{title}</h3>
        <p>{descr}</p>
        <Link href={link} className={Style.link}>
          Read More
          <span className={Style.icon}>{svgRight}</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
