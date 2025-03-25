import { IBM_Plex_Sans } from "next/font/google";

import "../styles/globals.scss";
import Providers from "../components/shared/providers";

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>

      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
