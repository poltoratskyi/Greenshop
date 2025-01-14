import { Id, Image, ItemId, Name, Price, ShortName, Sku, Tags } from "./common";

export type SizeId = {
  sizeId: number;
};

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

export type ItemSize = Id &
  ShortName & {
    fullName: string;
  };

export type ItemCategory = Id & Name & {};

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
