"use client";

import Style from "./search-items-result.module.scss";
import ItemList from "../../shared/catalog/item-list";
import CatalogStyle from "../../shared/catalog/catalog.module.scss";
import ItemsWrapper from "../../shared/catalog/items-wrapper";
import { useSearchStore } from "../../../store";

const ItemsList: React.FC = () => {
  const results = useSearchStore((state) => state.results);

  return (
    <div className={Style.result_items}>
      <h2 className={Style.title}>
        {results.length > 1 ? "Results" : "Result"}
      </h2>

      <div className={Style.scrollbar}>
        <ItemsWrapper>
          {results.map((item) => (
            <li key={item.id} className={CatalogStyle.list}>
              <ItemList {...item} />
            </li>
          ))}
        </ItemsWrapper>
      </div>
    </div>
  );
};

export default ItemsList;
