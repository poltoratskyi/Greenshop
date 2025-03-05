import { CartItemVariation } from "./cart";

export type Email = {
  id: number;
  itemId: number;
  name: string;
  sku: string;
  variationId: number;
  quantity: number;
  variations: CartItemVariation[];
};

export type Template = {
  firstName: string;
  lastName: string;
  orderId: string;
  items: Email[];
  total: number;
  subTotalAmount: number;
};
