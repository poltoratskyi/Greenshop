"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./empty.module.scss";
import { useSession } from "next-auth/react";

const Empty: React.FC = ({}) => {
  const pathname = usePathname();

  const { data: session } = useSession();

  return (
    <div className={Style.empty}>
      {session ? (
        <>
          <h4>Your cart is empty</h4>

          <p>There are no items in your cart</p>

          <Link href="/#catalog">
            <span>Continue shopping</span>
          </Link>
        </>
      ) : (
        <>
          <h4>Your cart is empty</h4>

          <p>To view your cart, please sign in to your account</p>

          <Link
            className={
              pathname === "/login"
                ? `${Style.link} ${Style.active}`
                : Style.link
            }
            href="/login"
          >
            Log In
          </Link>

          <Link href="/#catalog">
            <span>Or continue shopping</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default Empty;
