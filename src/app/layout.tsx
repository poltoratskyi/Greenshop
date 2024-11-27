import { IBM_Plex_Sans } from "next/font/google";

import "../styles/globals.scss";

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
