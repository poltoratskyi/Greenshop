import Checkout from "../../../components/shared/checkout";
import Loader from "../../../components/ui/loaders/suspense";
import { Suspense } from "react";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Checkout />
    </Suspense>
  );
}
