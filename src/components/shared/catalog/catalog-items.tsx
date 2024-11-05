import React from "react";
import { Item } from "../../../types";
import List from "./list";
import Style from "./catalog.module.scss";

interface Props {
  catalog: Item[];
  gridWidth?: boolean;
}

const CatalogItems: React.FC<Props> = ({ catalog, gridWidth }) => {
  return (
    <div className={Style.items}>
      <ul className={`${Style.lists} ${gridWidth && Style.related}`}>
        {catalog.map((item) => (
          <li key={item.id} className={Style.list}>
            <List {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogItems;
