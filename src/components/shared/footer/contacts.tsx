import Logo from "../header/logo";
import Style from "./footer.module.scss";

import { info } from "./static-data";

interface Element {
  descr: string;
  svg: JSX.Element;
}
[];

const Contacts: React.FC = () => {
  return (
    <div className={Style.contacts}>
      <div className={Style.wrapper}>
        <Logo logoPosition />

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
