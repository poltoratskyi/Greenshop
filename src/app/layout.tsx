import { Montserrat } from "next/font/google";

import "../styles/globals.scss";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>

      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
