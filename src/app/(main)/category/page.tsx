"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShopPage() {
  const router = useRouter();

  useEffect(() => {
    // redirect to "/shop"
    router.push("/");
  }, [router]);

  return null;
}
