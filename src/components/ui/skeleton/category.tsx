import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Category: React.FC<IContentLoaderProps> = ({
  width,
  height,
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
    <rect x="0" y="0" rx="5px" ry="5px" width={width} height={height} />
  </ContentLoader>
);

export default Category;
