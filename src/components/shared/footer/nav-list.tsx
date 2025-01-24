import Link from "next/link";
import Style from "./footer.module.scss";

interface Props {
  title: string;
  items: { title: string; link: string }[];
}

const NavList: React.FC<Props> = ({ title, items }) => {
  return (
    <nav className={Style.nav}>
      <h3 className={Style.title}>{title}</h3>
      <ul className={Style.lists}>
        {items.map((item, index) => (
          <li className={Style.list} key={index}>
            <Link className={Style.link} href={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
