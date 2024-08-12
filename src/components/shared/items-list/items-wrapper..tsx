import Style from "./items.module.scss";
import { Items } from "./items-list";

import { catalog } from "../../../data/catalog";

export const ItemsWrapper: React.FC = () => {
  return (
    <div className={Style.items}>
      <ul className={Style.lists}>
        {catalog.map((item) => (
          <Items key={item.itemId} {...item} />
        ))}
      </ul>
    </div>
  );
};
