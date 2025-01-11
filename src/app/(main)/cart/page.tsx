import { Suspense } from "react";

import Cart from "../../../components/shared/cart";
import Loader from "../../../components/shared/loaders/suspense";

const CartPage: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Cart />;
    </Suspense>
  );
};

export default CartPage;
