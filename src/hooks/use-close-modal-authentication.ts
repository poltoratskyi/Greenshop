"use client";

import { useRouter } from "next/navigation";
import { useUIStore } from "../store";

export const useCloseModalAuthentication = () => {
  const router = useRouter();

  const setIsToastOpen = useUIStore((state) => state.setIsToastOpen);

  const closeModal = () => {
    router.back();
    setIsToastOpen(false);
  };

  return { closeModal };
};
