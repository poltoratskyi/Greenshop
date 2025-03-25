interface Props {
  isDiscountClosed: boolean;
}

export const discountUtils = ({ isDiscountClosed }: Props) => {
  try {
    const existingDiscountStatus = localStorage.getItem("discountStatus");

    if (existingDiscountStatus === null) {
      localStorage.setItem("discountStatus", JSON.stringify(isDiscountClosed));
    }
  } catch (error) {
    console.error("Error writing to localStorage", error);
  }
};
