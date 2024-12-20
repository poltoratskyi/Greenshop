import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const CartItems: React.FC<IContentLoaderProps> = ({
  width,
  height,
  ...props
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 850 100`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* image */}
    <rect x="0" y="0" rx="5px" ry="5px" width="100" height="100" />

    {/* title */}
    <rect x="120" y="25" rx="5px" ry="5px" width="150" height="20" />

    {/* size */}
    <rect x="120" y="50" rx="5px" ry="5px" width="30" height="16" />
    <rect x="160" y="50" rx="5px" ry="5px" width="30" height="16" />

    {/* sku */}
    <rect x="120" y="70" rx="5px" ry="5px" width="30" height="16" />
    <rect x="160" y="70" rx="5px" ry="5px" width="80" height="16" />

    {/* price */}
    <rect x="315" y="40" rx="5px" ry="5px" width="80" height="25" />

    {/* counter*/}
    <rect x="480" y="40" rx="5px" ry="5px" width="100" height="25" />

    {/* total */}
    <rect x="650" y="40" rx="5px" ry="5px" width="80" height="25" />

    {/* delete */}
    <rect x="800" y="40" rx="5px" ry="5px" width="25" height="25" />
  </ContentLoader>
);

export default CartItems;
