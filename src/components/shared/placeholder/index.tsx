"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Style from "./placeholder.module.scss";
import { data } from "./static-data";

interface Props {
  title?: string;
  subtitle?: string;
  link?: string;
  linkValue?: string;
}

const Placeholder: React.FC<Props> = ({
  title = data.title,
  subtitle = data.subtitle,
  link = data.link,
  linkValue = data.linkValue,
}) => {
  const pathname = usePathname();

  return (
    <div className={Style.placeholder}>
      <h4>{title}</h4>

      <p>{subtitle}</p>

      <Link
        className={
          pathname === "/login" ? `${Style.login} ${Style.active}` : Style.login
        }
        href="/login"
      >
        {data.login}
      </Link>

      <Link href={link}>
        <span>{linkValue}</span>
      </Link>
    </div>
  );
};

export default Placeholder;
