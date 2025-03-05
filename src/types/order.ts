import { Id, UserId } from "./common";
import { User } from "./user";

export enum OrderStatus {
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}

export type Order = {
  id?: number;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  email: string;
  phone: string;
  state: string;
  zip?: string;
  notes?: string;

  items: JSON;

  user?: User;
  userId?: UserId;

  paymentId?: string;
};

export type VerificationCode = Id & {
  user: User;
  userId: UserId;
  code: string;
};
