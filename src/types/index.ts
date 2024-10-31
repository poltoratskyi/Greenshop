export type Item = {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  tags: string;
  sku: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  variations: Variation[];
};

export type Variation = {
  id: number;
  price: number;
  sailPrice: number;
  value: number;
  onSale: boolean;
  sizeId: number;
  itemId: number;
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

export type Size = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  variations: Variation[];
};
