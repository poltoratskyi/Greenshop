import { useUIStore } from "../../store";

export const useToastHandling = () => {
  const isToastOpen = useUIStore((state) => state.isToastOpen);
  const toastType = useUIStore((state) => state.toastType);
  const isSuccessToast = useUIStore((state) => state.isSuccessToast);

  const setIsToastOpen = useUIStore((state) => state.setIsToastOpen);
  const setIsSuccessToast = useUIStore((state) => state.setIsSuccessToast);
  const setToastType = useUIStore((state) => state.setToastType);

  return {
    isToastOpen,
    toastType,
    isSuccessToast,

    setIsToastOpen,
    setIsSuccessToast,
    setToastType,
  };
};
