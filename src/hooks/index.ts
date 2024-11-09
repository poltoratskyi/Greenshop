import { Item } from "../types";

// Percent Value
export const percentValue = (price: number, sailPrice: number): string => {
  const discount = ((price - sailPrice) / price) * 100;
  return discount.toFixed(0);
};

// Related Items
export const handleRelatedItems = (Item: Item) => {
  localStorage.setItem("RelatedItems", JSON.stringify(Item));
};

// Modal Search
