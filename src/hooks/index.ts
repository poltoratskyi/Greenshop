import { Item, Size } from "../types";

// Percent Value
export const percentValue = (price: number, salePrice: number): string => {
  const discount = ((price - salePrice) / price) * 100;
  return discount.toFixed(0);
};

// Related Items
export const handleRelatedItems = (Item: Item) => {
  localStorage.setItem("RelatedItems", JSON.stringify(Item));
};
