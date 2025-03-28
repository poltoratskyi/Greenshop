import { UserRole as PrismaUserRole } from "@prisma/client";
import { Email, Id } from "./common";
import { Cart } from "./cart";
import { VerificationCode } from "./order";
import { Order } from "./order";

export type User = Id &
  Email & {
    role: PrismaUserRole;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    country?: string | null;
    address?: string | null;
    apartment?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    password?: string | null;
    verificationCode?: VerificationCode;
    cart?: Cart | null;
    orders?: Order[] | null;
    provider?: string | null;
    providerId?: string | null;
    verified?: Date | null;
    createdAt: Date;
    updatedAt: Date;
  };

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}
