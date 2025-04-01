"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./placeholder.module.scss";
import { useSession } from "next-auth/react";

interface Props {
  title: string;
  subtitle: string;
  link?: string;
  linkValue?: string;
}

const Placeholder: React.FC<Props> = ({
  title,
  subtitle,
  link = "/",
  linkValue = "Or Back to Home",
}) => {
  const pathname = usePathname();

  const { data: session } = useSession();

  return (
    <div className={Style.placeholder}>
      <>
        <h4 className={Style.title}>{title}</h4>

        <p>{subtitle}</p>

        {!session && (
          <Link
            className={
              pathname === "/login"
                ? `${Style.login} ${Style.active}`
                : Style.login
            }
            href="/login"
          >
            Log In
          </Link>
        )}

        <Link href={link}>
          <span>{linkValue}</span>
        </Link>
      </>
    </div>
  );
};

export default Placeholder;
