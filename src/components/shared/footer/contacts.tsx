import { JSX } from "react";
import Logo from "../header/logo";
import Style from "./footer.module.scss";
import { info } from "./static-data";

interface Element {
  descr: string;
  svg: JSX.Element;
}
[];

interface Props {
  burger_menu?: boolean;
}

const Contacts: React.FC<Props> = ({ burger_menu }) => {
  return (
    <div
      className={`${
        burger_menu ? `${Style.contacts} ${Style.burger_menu}` : Style.contacts
      }`}
    >
      <div className={Style.wrapper}>
        <Logo />

        <ul className={Style.lists}>
          {info.map((item: Element, index: number) => (
            <li className={Style.list} key={index}>
              <div className={Style.icon}>{item.svg}</div>

              <p className={Style.descr}>{item.descr}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
