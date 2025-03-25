"use client";

import { useRouter } from "next/navigation";
import { useUIStore } from "../store";

export const useCloseModalAuthentication = () => {
  const router = useRouter();

  const setIsAuthErrorOpen = useUIStore((state) => state.setIsAuthErrorOpen);

  const closeModal = () => {
    router.back();
    setIsAuthErrorOpen(false);
  };

  return { closeModal };
};
