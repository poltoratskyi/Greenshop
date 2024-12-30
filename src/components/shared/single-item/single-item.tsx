"use client";

import React, { useEffect } from "react";
import { Item } from "../../../types";

import Style from "./single-item.module.scss";
import CatalogStyle from "../catalog/catalog.module.scss";
import CatalogItemList from "../catalog/item-list";

import ExtendedDescription from "./extended-description";
import ItemList from "./item-list";
import SingleItemWrapper from "./single-item-wrapper";
import ItemsWrapper from "../catalog/items-wrapper";
import Pathname from "../pathname";
import ModalChooseItemSize from "../../../components/shared/modal-choose-item-size";
import { useCatalogStore, useUIStore } from "../../../store";

export type Props = {
  item: Item;
};

const SingleItem: React.FC<Props> = ({ item }) => {
  const modalSize = useUIStore((state) => state.modalSize);
  const loadCatalog = useCatalogStore((state) => state.loadCatalog);

  useEffect(() => {
    if (modalSize === true) {
      loadCatalog();
    }
  }, [modalSize]);

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

      <ModalChooseItemSize />
    </>
  );
};

export default SingleItem;
