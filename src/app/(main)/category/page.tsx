"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ShopPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // redirect to "/shop"
    router.push("/");
  }, [router]);

  return null;
};

export default ShopPage;
