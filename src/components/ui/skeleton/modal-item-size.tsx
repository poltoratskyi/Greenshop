import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const ModalItemSize: React.FC<IContentLoaderProps> = ({
  width,
  height,
  ...props
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* image */}
    <rect x="0" y="0" rx="5px" ry="5px" width={100} height={100} />

    {/* title */}
    <rect x="110" y="10" rx="5px" ry="5px" width={150} height={20} />

    {/* sku */}
    <rect x="110" y="35" rx="5px" ry="5px" width={30} height={16} />
    <rect x="150" y="35" rx="5px" ry="5px" width={80} height={16} />

    {/* category */}
    <rect x="110" y="55" rx="5px" ry="5px" width={30} height={16} />
    <rect x="150" y="55" rx="5px" ry="5px" width={80} height={16} />

    {/* sizes */}
    <rect x="0" y="120" rx="5px" ry="5px" width="100%" height={48} />
    <rect x="0" y="180" rx="5px" ry="5px" width="100%" height={48} />
    <rect x="0" y="240" rx="5px" ry="5px" width="100%" height={48} />
    <rect x="0" y="300" rx="5px" ry="5px" width="100%" height={48} />
  </ContentLoader>
);

export default ModalItemSize;
