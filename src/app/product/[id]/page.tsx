import Overview from "../../../components/shared/overview";
interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params: { id } }) => {
  return <Overview id={id} />;
};

export default ProductPage;
