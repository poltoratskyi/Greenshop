import {
  Id,
  Image,
  Name,
  Quantity,
  ItemId,
  Token,
  Sku,
  Price,
  Tags,
  ShortName,
} from "./common";
import { ItemCategory } from "./item";
import { User } from "./user";

export type VariationId = {
  variationId: number;
};

export type TotalAmount = {
  totalAmount: number;
};

export type CartItemSize = ShortName & {};

export type CartItemVariation = Id &
  Price & {
    size: CartItemSize;
  };

export type CartItem = Id &
  Name &
  Quantity &
  Image &
  VariationId &
  ItemId &
  Sku & {
    singleItemPrice: number;
    variations: CartItemVariation[];
    category: ItemCategory;
  };

export type PostCartItem = ItemId & VariationId & {};

export type CartItemPrice = Id &
  ItemId &
  VariationId &
  Quantity & {
    item: ItemResponse;
  };

export type ItemResponse = Id &
  Image &
  Name &
  Sku &
  Tags & {
    categoryId: number;
    variations: CartItemVariation[];
    category: ItemCategory;
  };

export type ItemsResponse = Id &
  Quantity &
  ItemId &
  VariationId & {
    item: ItemResponse;
  };

export type CartResponse = Id &
  TotalAmount &
  Token & {
    userId?: number | null;
    items: ItemsResponse[];
  };

export type Cart = Id &
  TotalAmount &
  Token & {
    subtotalAmount: number;
    items: CartItem[];
    user: User;
    userId?: number;
  };
