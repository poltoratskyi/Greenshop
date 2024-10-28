"use client";

import { Item } from "../../../types";

import Style from "./results.module.scss";
import CatalogStyle from "../catalog/catalog.module.scss";

import List from "../catalog/list";

import { useSearchStore } from "../../../utils/store";

const Results: React.FC = () => {
  const results = useSearchStore((state) => state.results);
  const trending = useSearchStore((state) => state.trending);
  const setInputValue = useSearchStore((state) => state.setInputValue);

  return (
    <div className={Style.results}>
      <div className={Style.content}>
        <div className={Style.categories}>
          <h2 className={Style.title}>Trending searches</h2>

          <ul className={Style.lists}>
            {trending
              .sort((a, b) => b.rate - a.rate)
              .map((item, index) => (
                <li
                  onClick={() => setInputValue(item.name)}
                  key={index}
                  className={Style.list}
                >
                  {item.name}
                  {item.svg}
                </li>
              ))}
          </ul>
        </div>

        <div className={Style.result_items}>
          <h2 className={Style.title}>
            {results.length > 1 ? "Results" : "Result"}
          </h2>

          <div className={Style.scrollbar}>
            <div className={CatalogStyle.items}>
              <ul className={CatalogStyle.lists}>
                {results.map((item: Item) => (
                  <li key={item.id} className={CatalogStyle.list}>
                    <List {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
