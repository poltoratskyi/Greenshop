import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MiniCart: React.FC<IContentLoaderProps> = ({
  width,
  height,
  ...props
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 330 185`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* image */}
    <rect x="10" y="10" rx="5px" ry="5px" width="100" height="100" />

    {/* title */}
    <rect x="120" y="10" rx="5px" ry="5px" width="150" height="24" />

    {/* size */}
    <rect x="120" y="40" rx="5px" ry="5px" width="30" height="24" />
    <rect x="160" y="40" rx="5px" ry="5px" width="30" height="24" />

    {/* quantity */}
    <rect x="120" y="70" rx="5px" ry="5px" width="60" height="24" />
    <rect x="190" y="70" rx="5px" ry="5px" width="30" height="24" />

    {/* sku */}
    <rect x="120" y="100" rx="5px" ry="5px" width="30" height="24" />
    <rect x="160" y="100" rx="5px" ry="5px" width="80" height="24" />

    {/* price */}
    <rect x="120" y="130" rx="5px" ry="5px" width="35" height="24" />
    <rect x="220" y="130" rx="5px" ry="5px" width="100" height="24" />

    {/* total */}
    <rect x="120" y="160" rx="5px" ry="5px" width="35" height="24" />
    <rect x="270" y="160" rx="5px" ry="5px" width="50" height="24" />
  </ContentLoader>
);

export default MiniCart;
