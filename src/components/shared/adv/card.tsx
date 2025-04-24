import Image from "next/image";
import { svgRight } from "./static-data";
import Link from "next/link";

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
  descr: string;
}

const Card: React.FC<Props> = ({ imgUrl, title, subTitle, descr }) => {
  return (
    <div className="relative w-full bg-[#fafafa]">
      <div className="absolute bottom-0 left-1/2 h-auto w-[320px] max-xs:relative max-xs:w-auto max-xs:left-0">
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

      <div className="text-left p-10 pl-8 w-[295px] max-xs:w-auto max-xs:text-center max-xs:py-5 max-xs:px-[15px]">
        <h3 className="font-bold text-[20px] text-[#3d3d3d] uppercase clamp-2-lines mb-2.5 leading-[24px] max-xs:text-[16px] max-xs:mb-[5px]">
          {title} <br /> & {subTitle}
        </h3>

        <p className="font-normal text-[14px] text-[#727272] clamp-2-lines  mb-[15px] leading-[24px] max-xs:mb-[10px]">
          {descr}
        </p>

        <Link
          className="inline-flex items-center font-normal text-[14px] text-[#fff] gap-[5px] hover:bg-[#3c8b32] transition-all ease-in-out duration-300 leading-[24px bg-[#46a358] px-[30px] py-[15px] rounded-[6px]"
          href="#"
        >
          Find More
          <span className="text-[#3d3d3d] hover:fill-[#3c8b32]">
            {svgRight}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
