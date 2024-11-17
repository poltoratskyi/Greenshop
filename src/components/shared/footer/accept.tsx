import Link from "next/link";

import Style from "./footer.module.scss";

import { media, order } from "./static-data";

interface Props {
  burger_menu?: boolean;
}

const Accept: React.FC<Props> = ({ burger_menu }) => {
  return (
    <div className={Style.accept}>
      <div
        className={`${
          burger_menu ? `${Style.inner} ${Style.burger_menu}` : Style.inner
        }`}
      >
        <h3
          className={`${
            burger_menu ? `${Style.title} ${Style.burger_menu}` : Style.title
          }`}
        >
          Social Media
        </h3>

        <ul
          className={`${
            burger_menu ? `${Style.lists} ${Style.burger_menu}` : Style.lists
          }`}
        >
          {media.map((item, index) => (
            <li
              className={`${
                burger_menu ? `${Style.list} ${Style.burger_menu}` : Style.list
              }`}
              key={index}
            >
              <Link href={item.link}>{item.svg}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className={Style.title}>We accept</h3>

        <ul
          className={`${
            burger_menu ? `${Style.lists} ${Style.burger_menu}` : Style.lists
          }`}
        >
          {order.map((item, index) => (
            <li key={index}>
              <Link className={Style.link} href={item.link}>
                {item.svg}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accept;
