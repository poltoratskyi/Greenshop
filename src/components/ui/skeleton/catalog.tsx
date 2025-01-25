import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Catalog: React.FC<IContentLoaderProps> = ({
  width,
  height,
  viewBox,
  ...props
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/*  image  */}
    <rect x="0" y="0" rx="5px" ry="5px" width={width} height={305} />

    {/*  title */}
    <rect x="0px" y="320" rx="5px" ry="5px" width={175} height={24} />

    {/*  price */}
    <rect x="0px" y="355" rx="5px" ry="5px" width={55} height={14} />

    {/* sale */}
    <rect x="80px" y="355" rx="5px" ry="5px" width={55} height={14} />
  </ContentLoader>
);

export default Catalog;
