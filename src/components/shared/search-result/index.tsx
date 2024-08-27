import Link from "next/link";

import { Variation } from "../../../types";

import Style from "./result.module.scss";
import StyleCatalog from "../../shared/item/item.module.scss";

import { Item } from "../item";

const svgRight = (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path
      d="m15.1956 17.7007c.387.394 1.0202.3997 1.4142.0127l5.0909-5c.1915-.188.2993-.4451.2993-.7134s-.1078-.5254-.2993-.7134l-5.0909-5.00005c-.394-.38699-1.0272-.38129-1.4142.01274-.3869.39403-.3812 1.02717.0128 1.41416l3.3463 3.28655h-15.5547c-.55228 0-1 .4477-1 1s.44772 1 1 1h15.5547l-3.3463 3.2866c-.394.3869-.3997 1.0201-.0128 1.4141z"
      fill="#acacac"
    ></path>
  </svg>
);

interface Props {
  searchResults?: {
    id: number;
    imgUrl: string;
    name: string;
    description: string;
    tags: string;
    sku: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    firstVariation?: Variation;
    variations: Variation[];
  }[];
}

export const Result: React.FC<Props> = ({ searchResults }) => {
  return (
    <section className={Style.result}>
      <div className={Style.content}>
        <div className={Style.categories}>
          <h2 className={Style.title}>Trending searches</h2>

          <ul className={Style.lists}>
            <li className={Style.list}>
              <Link href="#">Trending search{svgRight}</Link>
            </li>
            <li className={Style.list}>
              <Link href="#">Trending search{svgRight}</Link>
            </li>
            <li className={Style.list}>
              <Link href="#">Trending search{svgRight}</Link>
            </li>
            <li className={Style.list}>
              <Link href="#">Trending search{svgRight}</Link>
            </li>
          </ul>
        </div>

        <div className={Style.result_items}>
          <h2 className={Style.title}>Result</h2>

          <div style={{ height: "500px", overflowY: "auto" }}>
            <div className={StyleCatalog.items}>
              <ul className={StyleCatalog.lists}>
                {searchResults &&
                  searchResults.map((item) => <Item key={item.id} {...item} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
