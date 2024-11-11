import Footer from "../../components/shared/footer";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "GREENSHOP | Auth Page",
  description: "Online plant store",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {children}

      <Footer />
    </main>
  );
};

export default AuthLayout;
