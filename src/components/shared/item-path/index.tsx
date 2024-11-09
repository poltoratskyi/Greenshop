import Link from "next/link";

import { Item } from "../../../types";

import Style from "./item-path.module.scss";

import Backspace from "../backspace";

interface Props {
  item: Item;
}

const ItemPath: React.FC<Props> = ({ item }) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.item_path}>
        <Backspace />

        <ul className={Style.lists}>
          <Link href="/">
            <li className={`${Style.list} ${Style.link}`}>GREENSHOP /</li>
          </Link>

          <li className={Style.list}>{item.categories} /</li>
          <li className={`${Style.list} ${Style.active}`}>{item.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemPath;
