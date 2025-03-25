"use client";

import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>

      <NextTopLoader color="#ffffff" showSpinner={false} />
    </>
  );
};

export default Providers;
