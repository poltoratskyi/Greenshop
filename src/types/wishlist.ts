import { ItemVariation } from "./";

export type WishlistResponse = {
  id: number;
  createdAt: Date;
  items: WishlistItem[];
};

export type WishlistItem = {
  id: number;

  itemId: number;
  variationId: number;

  item: {
    id: number;

    imgUrl: string;
    name: string;
    sku: string;
    categoryId: number;

    variations: ItemVariation[];
    category: {
      id: number;

      name: string;
    };
  };
};
