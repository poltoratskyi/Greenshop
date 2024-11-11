"use client";

import { Item } from "../../../types";

import Style from "./single-item.module.scss";
import CatalogStyle from "../catalog/catalog.module.scss";
import CatalogList from "../catalog/list";

import ExtendedDescription from "./extended-description";
import List from "./list";
import Wrapper from "./wrapper";
import CatalogItems from "../catalog/catalog-items";
import Pathname from "../pathname";

interface Props {
  item: Item;
}

const SingleItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Pathname item={item} thirdPath />

      <section className={Style.single_item}>
        <div className="container">
          <List item={item} />

          <Wrapper title="Product Description">
            <ExtendedDescription item={item} />
          </Wrapper>

          <Wrapper title="Related Products">
            <CatalogItems gridWidth>
              {[item].map((item) => (
                <li key={item.id} className={CatalogStyle.list}>
                  <CatalogList {...item} />
                </li>
              ))}
            </CatalogItems>
          </Wrapper>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
