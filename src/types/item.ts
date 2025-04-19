import {
  FullName,
  Id,
  Image,
  ItemCategory,
  ItemId,
  ItemStatus,
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
    popularity: number;
  };

export type ItemSize = Id & ShortName & FullName & {};

export type ItemVariation = Id &
  Price &
  SizeId &
  ItemStatus & {
    size: ItemSize;
  };

export type QuantityItemsCategory = ItemCategory & {
  items: Item[];
};

export type QuantityItemsSize = ItemVariation &
  ItemId & {
    item: Item;
  };
