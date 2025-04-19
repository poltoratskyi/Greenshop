import { QuantityItemsSize } from "../../types";

export const getSizeQuantity = (
  arr: QuantityItemsSize[],
  stock: number
): number => {
  const result = arr.filter((item) => item.sizeId === stock);

  const total = result.reduce((acc, item) => {
    return acc + item.stock;
  }, 0);

  return total;
};
