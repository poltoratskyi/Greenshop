import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MyLoader: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect
      x="0"
      y="0"
      rx="5px"
      ry="5px"
      width={props.width}
      height={props.height}
    />
  </ContentLoader>
);

export default MyLoader;
