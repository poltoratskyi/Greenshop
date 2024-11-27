export type Item = {
  id: number;
  imgUrl: string;
  name: string;
  shortDescription: string;
  extendedDescription: string;
  categories: string;
  tags: string;
  sku: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  variations: Variation[];
};

export type Variation = {
  price: number;
  sale: number;
  value: number;
  onSale: boolean;
  sizeId: number;
  itemId: number;
  createdAt: Date;
  updatedAt: Date;
  size: Size;
};

export type Size = {
  id: number;
  shortName: string;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  items: Item[];
};
