"use client";

import { Item } from "../../../types";

import Style from "./single-item.module.scss";
import CatalogStyle from "../catalog/catalog.module.scss";
import CatalogItemList from "../catalog/item-list";

import ExtendedDescription from "./extended-description";
import ItemList from "./item-list";
import SingleItemWrapper from "./single-item-wrapper";
import ItemsWrapper from "../catalog/items-wrapper";
import Pathname from "../pathname";

export type Props = {
  item: Item;
};

const SingleItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Pathname item={item} thirdPath />

      <section className={Style.single_item}>
        <div className="container">
          <ItemList item={item} />

          <SingleItemWrapper title="Product Description">
            <ExtendedDescription item={item} />
          </SingleItemWrapper>

          <SingleItemWrapper title="Related Products">
            <ItemsWrapper gridWidth>
              {[item].map((item) => (
                <li key={item.id} className={CatalogStyle.list}>
                  <CatalogItemList {...item} />
                </li>
              ))}
            </ItemsWrapper>
          </SingleItemWrapper>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
