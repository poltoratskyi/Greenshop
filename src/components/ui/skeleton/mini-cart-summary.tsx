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
    viewBox={`0 0 330 185`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Subtotal */}
    <rect x="10" y="10" rx="5px" ry="5px" width="80" height="24" />
    <rect x="260" y="10" rx="5px" ry="5px" width="60" height="24" />

    {/* Coupon Discount */}
    <rect x="10" y="40" rx="5px" ry="5px" width="110" height="24" />
    <rect x="240" y="40" rx="5px" ry="5px" width="80" height="24" />

    {/* Shipping */}
    <rect x="10" y="70" rx="5px" ry="5px" width="80" height="24" />
    <rect x="260" y="70" rx="5px" ry="5px" width="60" height="24" />

    {/* Total */}
    <rect x="10" y="100" rx="5px" ry="5px" width="30" height="24" />
    <rect x="260" y="100" rx="5px" ry="5px" width="60" height="24" />

    {/* Button */}
    <rect x="10" y="130" rx="5px" ry="5px" width="310" height="55" />
  </ContentLoader>
);

export default MiniCartSummary;
