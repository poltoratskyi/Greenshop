import Header from "../../components/shared/checkout/header";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "GREENSHOP | Checkout Page",
  description: "Online plant store",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ paddingBottom: "30px" }}>
      <Header />
      {children}
    </main>
  );
}
