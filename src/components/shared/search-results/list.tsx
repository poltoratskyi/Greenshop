"use client";

import Style from "./search-items-result.module.scss";
import Card from "../catalog/card";
import CatalogStyle from "../../shared/catalog/catalog.module.scss";
import Wrapper from "../catalog/wrapper";
import { useSearchStore } from "../../../store";

const List: React.FC = () => {
  const searchResults = useSearchStore((state) => state.searchResults);

  return (
    <div className={Style.container}>
      <h2 className={Style.title}>
        {searchResults.length > 1 ? "Results" : "Result"}
      </h2>

      <div className={Style.items}>
        <Wrapper>
          {searchResults.map((item) => (
            <li key={item.id} className={CatalogStyle.list}>
              <Card {...item} />
            </li>
          ))}
        </Wrapper>
      </div>
    </div>
  );
};

export default List;
