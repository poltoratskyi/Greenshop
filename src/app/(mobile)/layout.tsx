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
  return <main>{children}</main>;
};

export default MobileLayout;
