import Link from "next/link";

import Style from "./footer.module.scss";

import { account, help, categories, media, order } from "./static-data";
interface Item {
  title: string;
  link: string;
}
[];

interface Element {
  svg: JSX.Element;
  link: string;
}
[];

const Feedback: React.FC = () => {
  return (
    <div className={Style.feedback}>
      <nav>
        <h3 className={Style.title}>My Account</h3>

        <ul className={Style.lists}>
          {account.map((item: Item, index: number) => (
            <li className={Style.list} key={index}>
              <Link className={Style.link} href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <h3 className={Style.title}>Help & Guide</h3>

        <ul className={Style.lists}>
          {help.map((item: Item, index: number) => (
            <li className={Style.list} key={index}>
              <Link className={Style.link} href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <h3 className={Style.title}>Categories</h3>

        <ul className={Style.lists}>
          {categories.map((item: Item, index: number) => (
            <li className={Style.list} key={index}>
              <Link className={Style.link} href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={Style.accept}>
        <nav style={{ marginBottom: "30px" }}>
          <h3 className={Style.title}>Social Media</h3>

          <ul className={Style.lists}>
            {media.map((item: Element, index: number) => (
              <li className={Style.list} key={index}>
                <Link href={item.link}>{item.svg}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className={Style.title}>We accept</h3>

          <ul className={Style.lists}>
            {order.map((item: Element, index: number) => (
              <li key={index}>
                <Link href={item.link}>{item.svg}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Feedback;
