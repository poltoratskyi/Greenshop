import { CartItemVariation } from "./cart";
import {
  Id,
  ItemId,
  Name,
  Sku,
  Quantity,
  VariationId,
  SubTotalAmount,
  PersonName,
  TotalAmount,
} from "./common";

export type OrderEmail = Id &
  ItemId &
  Name &
  Sku &
  Quantity &
  VariationId & {
    variations: CartItemVariation[];
  };

export type OrderTemplate = SubTotalAmount &
  PersonName &
  TotalAmount & {
    orderId: string;
    items: OrderEmail[];
  };
