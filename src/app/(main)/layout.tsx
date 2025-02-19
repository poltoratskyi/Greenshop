import { Metadata } from "next";

import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import SaleBanner from "../../components/ui/sale-banner";

const metadata: Metadata = {
  title: "GREENSHOP | Main Page",
  description: "Generated by create next app",
};

export default async function MainLayout({
  children,
  modal,
  category,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  category: React.ReactNode;
}>) {
  return (
    <main>
      <SaleBanner />

      <Header />

      {modal}

      {category}

      {children}

      <Footer />
    </main>
  );
}
