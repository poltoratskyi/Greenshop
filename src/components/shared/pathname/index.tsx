import Link from "next/link";

import { Item } from "../../../types";

import Style from "./pathname.module.scss";

import Backspace from "../backspace";

interface Props {
  item?: Item;
  second?: string;
  third?: string;
  thirdPath?: boolean;
}

const Pathname: React.FC<Props> = ({ item, second, third, thirdPath }) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.item_path}>
        <Backspace />

        <ul className={Style.lists}>
          <Link href="/">
            <li className={`${Style.list} ${Style.link}`}>Home /</li>
          </Link>

          <li
            style={!thirdPath ? { cursor: "auto" } : {}}
            className={`${
              thirdPath ? Style.list : `${Style.list} ${Style.active}`
            }`}
          >
            {item ? item.categories : second} {thirdPath && "/"}
          </li>

          {thirdPath && (
            <li className={`${Style.list} ${Style.active}`}>
              {item ? item.name : third}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pathname;
