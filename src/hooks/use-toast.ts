import { useToastHandling } from "./";

export const useToast = () => {
  const { setIsSuccessToast, setToastType, setIsToastOpen } =
    useToastHandling();

  const showToast = async (message: string, isSuccess: boolean) => {
    setToastType(message);
    setIsSuccessToast(isSuccess);
    setIsToastOpen(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsToastOpen(false);

    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return { showToast };
};
