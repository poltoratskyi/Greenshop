import { QuantityItemsCategory } from "../../types";

export const getCategoryItemQuantity = (
  arr: QuantityItemsCategory[],
  id: number
): number => {
  const result = arr.reduce((acc, e) => {
    const itemQuantity = e.items.filter(
      (item) => item.categoryId === id
    ).length;

    return acc + itemQuantity;
  }, 0);

  return result;
};
