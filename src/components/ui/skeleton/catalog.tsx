import React from "react";
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
    viewBox={`0 0 255 380`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/*  image  */}
    <rect x="0" y="0" rx="5px" ry="5px" width={255} height={310} />

    {/*  title */}
    <rect x="0px" y="325" rx="5px" ry="5px" width={175} height={24} />

    {/*  price */}
    <rect x="0px" y="365" rx="5px" ry="5px" width={55} height={14} />

    {/* sale */}
    <rect x="80px" y="365" rx="5px" ry="5px" width={55} height={14} />
  </ContentLoader>
);

export default Catalog;
