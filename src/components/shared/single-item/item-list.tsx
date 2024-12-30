import Link from "next/link";
import Image from "next/image";

import Style from "./single-item.module.scss";

import { Item } from "../../../types";

import { media } from "./static-data";

import DiscountBadge from "./discount-badge";
import ItemInfo from "./item-info";

interface Props {
  item: Item;
}

const ItemList: React.FC<Props> = ({ item }) => {
  return (
    <div className={Style.content}>
      <Image
        width={600}
        height={600}
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
        src={item.imgUrl}
        alt={item.name}
      />

      <DiscountBadge item={item} />

      <div className={Style.block}>
        <h2>{item.name}</h2>

        <ItemInfo item={item} />

        <p className={Style.sku}>
          <span>Sku: </span>
          {item.sku}
        </p>

        <p className={Style.category}>
          <span>Category: </span>
          {item.category?.name}
        </p>

        <p className={Style.tags}>
          <span>Tags: </span>
          {item.tags}
        </p>

        <div className={Style.share}>
          <p className={Style.text}>Share this products:</p>

          <ul className={Style.share_lists}>
            {media.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.svg}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
