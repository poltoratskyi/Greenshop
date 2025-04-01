import { $Enums } from "@prisma/client";
import {
  Country,
  Email,
  FullName,
  Id,
  PersonName,
  Price,
  ShortName,
  SizeId,
  State,
  UserId,
} from "./common";
import { User } from "./user";

export enum OrderStatus {
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}

export type Order = Email &
  PersonName &
  State &
  Country & {
    id?: number;
    address: string;
    apartment?: string | null;
    city: string;
    phone: string;
    zip?: string | null;
    notes?: string | null;

    user?: User | null;
    userId?: UserId | null;

    paymentId?: string | null;
  };

export type VerificationCode = Id & {
  user: User;
  userId: UserId;
  code: string;
};

export type OrderItemSize = Id & ShortName & FullName & {};

export type OrderItemVariation = Id &
  Price &
  SizeId & {
    size: OrderItemSize;
  };

export type OrderItem = {
  id: number;

  variationId: number;
  quantity: number;

  item: {
    id: number;

    imgUrl: string;
    name: string;

    variations: OrderItemVariation[];
  };
};

export type OrderItems = {
  id: number;
  createdAt: Date;
  totalAmount: number;
  status: $Enums.OrderStatus;

  items: OrderItem[];
};
