import { Item } from "../types";

export const percentValue = (price: number, sailPrice: number): string => {
  const discount = ((price - sailPrice) / price) * 100;
  return discount.toFixed(0);
};

export const handleRelatedItems = (Item: Item) => {
  localStorage.setItem("RelatedItems", JSON.stringify(Item));
};
