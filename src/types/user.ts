import { Id } from "./common";
import { Cart } from "./cart";
import { VerificationCode } from "./order";
import { Order } from "./order";

export type User = Id & {
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

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}
