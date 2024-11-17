import Link from "next/link";

import Style from "./footer.module.scss";

import Accept from "./accept";
import { account, help, categories } from "./static-data";

const Feedback: React.FC = () => {
  return (
    <div className={Style.feedback}>
      <nav>
        <h3 className={Style.title}>My Account</h3>

        <ul className={Style.lists}>
          {account.map((item, index) => (
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
          {help.map((item, index) => (
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
          {categories.map((item, index) => (
            <li className={Style.list} key={index}>
              <Link className={Style.link} href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Accept />
    </div>
  );
};

export default Feedback;
