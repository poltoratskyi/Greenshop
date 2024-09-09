import React from "react";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params: { id } }) => {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ProductPage;
