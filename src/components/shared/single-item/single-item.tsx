"use client";

import { Item } from "../../../types";

import Style from "./single-item.module.scss";

import Backspace from "../backspace";
import ExtendedDescription from "./extended-description";
import List from "./list";
import Wrapper from "./wrapper";
import CatalogItems from "../catalog/catalog-items";

interface Props {
  item: Item;
}

const SingleItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Backspace text="Single Item" />
      <section className={Style.single_item}>
        <div className="container">
          <List item={item} />

          <Wrapper title="Product Description">
            <ExtendedDescription item={item} />
          </Wrapper>

          <Wrapper title="Related Products">
            <CatalogItems gridWidth catalog={[item]} />
          </Wrapper>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
