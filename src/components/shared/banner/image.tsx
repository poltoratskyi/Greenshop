import Image from "next/image";

interface Props {
  imgUrl: string;
  width?: number;
  height?: number;
}

const Img: React.FC<Props> = ({ imgUrl, width, height }) => {
  return (
    <Image
      width={width}
      height={height}
      priority
      style={{
        width: "100%",
        height: "auto",
      }}
      src={imgUrl}
      alt="main"
    />
  );
};

export default Img;
