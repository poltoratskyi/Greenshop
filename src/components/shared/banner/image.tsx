interface Props {
  imgUrl: string;
  width?: number;
  height?: number;
}

const Img: React.FC<Props> = ({ imgUrl, width, height }) => {
  return <img src={imgUrl} width={width} height={height} alt="img" />;
};

export default Img;
