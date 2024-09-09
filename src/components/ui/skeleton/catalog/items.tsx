import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MyLoader: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={380}
    viewBox="0 0 250 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5px" ry="5px" width="250" height="380" />
  </ContentLoader>
);

export default MyLoader;
