import { Id, ItemId, Quantity, Token, UserId } from "./common";
import { User } from "./user";

export enum OrderStatus {
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}

export type OrderItem = Id &
  Quantity &
  ItemId & {
    order: Order;
    orderId: number;
    price: number;
  };

export type Order = Id &
  Token & {
    firstName: string;
    lastName: string;
    city: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    country: string;
    notes?: string;

    items: JSON;

    user: User;
    userId: UserId;

    order: OrderItem[];

    status: OrderStatus;

    paymentId?: string;
  };

export type VerificationCode = Id & {
  user: User;
  userId: UserId;
  code: string;
};
