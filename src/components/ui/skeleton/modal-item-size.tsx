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
    viewBox={`0 0 300 ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* image */}
    <rect x="20" y="0" rx="5px" ry="5px" width={100} height={100} />

    {/* title */}
    <rect x="130" y="10" rx="5px" ry="5px" width={150} height={20} />

    {/* sku */}
    <rect x="130" y="35" rx="5px" ry="5px" width={30} height={16} />
    <rect x="170" y="35" rx="5px" ry="5px" width={80} height={16} />

    {/* category */}
    <rect x="130" y="55" rx="5px" ry="5px" width={30} height={16} />
    <rect x="170" y="55" rx="5px" ry="5px" width={80} height={16} />

    {/* sizes */}
    <rect x="20" y="120" rx="5px" ry="5px" width={265} height={48} />
    <rect x="20" y="180" rx="5px" ry="5px" width={265} height={48} />
    <rect x="20" y="240" rx="5px" ry="5px" width={265} height={48} />
    <rect x="20" y="300" rx="5px" ry="5px" width={265} height={48} />
  </ContentLoader>
);

export default ModalItemSize;
