import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "../components/styles/globals.scss";

import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Overlay from "../components/ui/overlay";
import Modal from "../components/ui/modal";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Overlay />

        <Header />

        <Modal />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
