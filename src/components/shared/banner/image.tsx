import Image from "next/image";

interface Props {
  imgUrl: string;
  width?: number;
  height?: number;
}

const Img: React.FC<Props> = ({ imgUrl, width, height }) => {
  return (
    <Image
      src={imgUrl}
      width={width}
      height={height}
      priority={true}
      alt="Main-banner.jpg"
    />
  );
};

export default Img;
