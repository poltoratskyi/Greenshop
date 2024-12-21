import React from "react";
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
    viewBox={`0 0 350 175`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* image */}
    <rect x="10" y="10" rx="5px" ry="5px" width="100" height="100" />

    {/* title */}
    <rect x="120" y="10" rx="5px" ry="5px" width="150" height="20" />

    {/* size */}
    <rect x="120" y="35" rx="5px" ry="5px" width="30" height="16" />
    <rect x="160" y="35" rx="5px" ry="5px" width="30" height="16" />

    {/* quantity */}
    <rect x="120" y="55" rx="5px" ry="5px" width="30" height="16" />
    <rect x="160" y="55" rx="5px" ry="5px" width="30" height="16" />

    {/* sku */}
    <rect x="120" y="75" rx="5px" ry="5px" width="30" height="16" />
    <rect x="160" y="75" rx="5px" ry="5px" width="80" height="16" />

    {/* price */}
    <rect x="120" y="110" rx="5px" ry="5px" width="30" height="25" />
    <rect x="260" y="110" rx="5px" ry="5px" width="80" height="25" />

    {/* total */}
    <rect x="120" y="140" rx="5px" ry="5px" width="30" height="25" />
    <rect x="260" y="140" rx="5px" ry="5px" width="80" height="25" />
  </ContentLoader>
);

export default MiniCart;
