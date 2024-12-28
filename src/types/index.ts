export type Item = {
  id: number;

  imgUrl: string;
  name: string;
  shortDescription: string;
  extendedDescription: string;
  tags: string;
  sku: string;

  variations: {
    id: number;

    price: number;
    sale: number;
    onSale: boolean;

    sizeId: number;

    size: {
      id: number;
      fullName?: string;
      shortName: string;
    };
  }[];

  category: {
    id: number;
    name: string;
  };

  categoryId: number;
};

export type Cart = {
  id: number;

  subtotalAmount: number;
  totalAmount: number;
  token: string;

  items: CartItem[];

  user: User;
  userId?: number;
};

export type CartItem = {
  id: number;

  singleItemPrice: number;

  quantity: number;
  name: string;
  imgUrl: string;
  sku: string;
  itemId: number;
  variationId: number;

  variations: CartVariation[];
};

export type PostCartItem = {
  itemId: number;
  variationId: number;
};

export type CartSingleItemPrice = {
  id: number;

  itemId: number;
  variationId: number;
  quantity: number;

  item: {
    id: number;

    imgUrl: string;
    name: string;
    sku: string;
    tags: string;
    categoryId: number;

    variations: {
      id: number;

      price: number;
      sale: number;
      onSale: boolean;
    }[];
  };
};

export type CartVariation = {
  id: number;

  price: number;
  sale: number;
  onSale: boolean;

  size: {
    shortName: string;
  };
};

export type CartResponse = {
  id: number;

  totalAmount: number;
  token: string;
  userId?: number | null;

  items: {
    id: number;

    quantity: number;
    itemId: number;
    variationId: number;

    item: {
      id: number;

      imgUrl: string;
      name: string;
      tags: string;
      sku: string;
      categoryId: number;

      variations: {
        id: number;

        price: number;
        sale: number;
        onSale: boolean;

        size: {
          shortName: string;
        };
      }[];

      category: {
        id: number;
        name: string;
      };
    };
  }[];
};

export type Variation = {
  id: number;

  price: number;
  sale: number;
  value: number;
  onSale: boolean;

  size: Size;
  sizeId: number;

  item: Item;
  itemId: number;
};

export type Size = {
  id: number;

  shortName: string;
  fullName: string;

  variations: Variation[];
};

export type Category = {
  id: number;

  name: string;

  items: Item[];
};

export type User = {
  id: number;

  role: string;
  fullName: string;
  email: string;
  password: string;

  verificationCode?: VerificationCode;
  cart?: Cart;
  orders?: Order[];

  provider?: string;
  providerId?: string;

  verified: Date;
};

export type VerificationCode = {
  id: number;

  user: User;
  userId: number;
  code: string;
};

export type Order = {
  id: number;

  userName: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  token: string;
  notes?: string;

  items: JSON;

  user: User;
  userId: number;

  order: OrderItem[];

  status: OrderStatus;

  paymentId?: string;
};

export type OrderItem = {
  id: number;

  order: Order;

  quantity: number;
  orderId: number;
  itemId: number;
  price: number;
};

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum OrderStatus {
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}
