import { Country, Email, Id, PersonName, State, UserId } from "./common";
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

    items: JSON;

    user?: User | null;
    userId?: UserId | null;

    paymentId?: string | null;
  };

export type VerificationCode = Id & {
  user: User;
  userId: UserId;
  code: string;
};
