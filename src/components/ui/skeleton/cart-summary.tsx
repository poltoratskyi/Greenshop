import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const CartSummary: React.FC<IContentLoaderProps> = ({
  width,
  height,
  ...props
}) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 60 24`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Value */}
    <rect x="0" y="0" rx="5px" ry="5px" width="60" height="24" />
  </ContentLoader>
);

export default CartSummary;
