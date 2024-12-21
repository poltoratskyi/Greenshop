import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const MiniCartSummary: React.FC<IContentLoaderProps> = ({
  width,
  height,
  ...props
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 350 185`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Subtotal */}
    <rect x="20" y="15" rx="5px" ry="5px" width="30" height="16" />
    <rect x="250" y="15" rx="5px" ry="5px" width="80" height="16" />

    {/* Coupon Discount */}
    <rect x="20" y="40" rx="5px" ry="5px" width="30" height="16" />
    <rect x="250" y="40" rx="5px" ry="5px" width="80" height="16" />

    {/* Shipping */}
    <rect x="20" y="65" rx="5px" ry="5px" width="30" height="16" />
    <rect x="250" y="65" rx="5px" ry="5px" width="80" height="16" />

    {/* Total */}
    <rect x="20" y="90" rx="5px" ry="5px" width="30" height="25" />
    <rect x="250" y="90" rx="5px" ry="5px" width="80" height="25" />

    {/* Button */}
    <rect x="20" y="120" rx="5px" ry="5px" width="310" height="55" />
  </ContentLoader>
);

export default MiniCartSummary;
