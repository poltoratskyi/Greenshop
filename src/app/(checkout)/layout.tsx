import Footer from "../../components/shared/footer";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "GREENSHOP | Mobile ver",
  description: "Online plant store",
};

const MobileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {children} <Footer />
    </main>
  );
};

export default MobileLayout;
