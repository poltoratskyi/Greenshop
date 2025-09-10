import Image from "next/image";
import Link from "next/link";
import Style from "./card.module.scss";
import { svgRight } from "./static-data";

interface Props {
  id: number;
  imgUrl: string;
  date: string;
  heading: string;
  title: string;
  descr: string;
}

const Card: React.FC<Props> = ({ id, imgUrl, date, heading, title, descr }) => {
  return (
    <div className="text-center">
      <Image
        className={Style.img}
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

      <div className="text-left p-[10px] bg-[#fafafa] max-xs:p-[15px] max-xs:rounded-bl-[6px] max-xs:rounded-br-[6px]">
        <div className="text-center mb-[5px] max-xs:text-left">
          <span className="font-[400] text-[14px] leading-[24px] text-[#46a358]">
            {date}
          </span>

          <span className="font-[400] text-[14px] leading-[24px] text-[#3d3d3d] py-0 px-[10px]">
            |
          </span>

          <span className="font-[400] text-[14px] leading-[24px] text-[#46a358]">
            {heading}
          </span>
        </div>

        <h3 className="font-[500] text-[20px] leading-[24px] text-[#3d3d3d] mb-[10px] clamp-2-lines max-xs:mb-[5px] max-xs:text-[16px]">
          {title}
        </h3>

        <p className="font-[400] text-[14px] leading-[24px] text-[#727272] mb-[15px] clamp-2-lines max-xs:mb-[10px]">
          {descr}
        </p>

        <Link
          href={`/blog/${id}`}
          className={Style.link}
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
          }}
        >
          Read More
          <span className={Style.icon}>{svgRight}</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
