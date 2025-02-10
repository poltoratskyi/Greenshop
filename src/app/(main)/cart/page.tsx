import { Suspense } from "react";
import Cart from "../../../components/shared/cart";
import Loader from "../../../components/shared/loaders/suspense";

export default function CartPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Cart />
    </Suspense>
  );
}
