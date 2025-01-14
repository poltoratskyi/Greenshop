import { QuantityItemsSize } from "../types";

export const getQuantitySize = (
  arr: QuantityItemsSize[],
  value: number
): number => {
  const result = arr.filter((item) => item.sizeId === value);

  const total = result.reduce((acc, item) => {
    return acc + item.value;
  }, 0);

  return total;
};
