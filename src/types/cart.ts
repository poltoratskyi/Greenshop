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
  FullName,
  SizeId,
  ItemCategory,
} from "./common";
import { User } from "./user";

export type VariationId = {
  variationId: number;
};

export type TotalAmount = {
  totalAmount: number;
};

export type CartItemSize = Id & ShortName & FullName & {};

export type CartItemVariation = Id &
  Price &
  SizeId & {
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
