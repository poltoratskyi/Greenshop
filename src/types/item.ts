import {
  FullName,
  Id,
  Image,
  ItemCategory,
  ItemId,
  Name,
  Price,
  ShortName,
  SizeId,
  Sku,
  Tags,
} from "./common";

export type Item = Id &
  Image &
  Name &
  Sku &
  Tags & {
    shortDescription: string;
    extendedDescription: string;
    variations: ItemVariation[];
    category: ItemCategory;
    categoryId: number;
  };

export type ItemSize = Id & ShortName & FullName & {};

export type ItemVariation = Id &
  Price &
  SizeId & {
    size: ItemSize;
  };

export type QuantityItemsCategory = ItemCategory & {
  items: Item[];
};

export type QuantityItemsSize = ItemVariation &
  ItemId & {
    item: Item;
    value: number;
  };
