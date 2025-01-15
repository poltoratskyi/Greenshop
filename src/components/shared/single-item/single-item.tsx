"use client";

import React, { useEffect } from "react";

import Style from "./single-item.module.scss";
import CatalogStyle from "../catalog/catalog.module.scss";
import CatalogItemList from "../catalog/item-list";

import ExtendedDescription from "./extended-description";
import ItemList from "./item-list";
import SingleItemWrapper from "./single-item-wrapper";
import ItemsWrapper from "../catalog/items-wrapper";
import Pathname from "../pathname";
import ModalChooseItemSize from "../../../components/ui/modal-choose-item-size";
import Loader from "../../../components/shared/loaders/default";
import { useItemStore } from "../../../store";

interface Props {
  id: number;
}

const SingleItem: React.FC<Props> = ({ id }) => {
  const isLoading = useItemStore((state) => state.isLoading);
  const item = useItemStore((state) => state.item);
  const loadItem = useItemStore((state) => state.loadItem);

  useEffect(() => {
    loadItem(id);
  }, [id]);

  if (isLoading) {
    return <Loader item />;
  }

  return (
    <>
      {item.map((item) => (
        <React.Fragment key={item.id}>
          <Pathname name={item.name} category={item.category} thirdPath />

          <section className={Style.single_item}>
            <div className="container">
              <ItemList
                id={item.id}
                name={item.name}
                imgUrl={item.imgUrl}
                sku={item.sku}
                tags={item.tags}
                shortDescription={item.shortDescription}
                category={item.category}
                variations={item.variations}
              />

              <SingleItemWrapper title="Product Description">
                <ExtendedDescription
                  extendedDescription={item.extendedDescription}
                />
              </SingleItemWrapper>

              <SingleItemWrapper title="Related Products">
                <ItemsWrapper gridWidth>
                  <li key={item.id} className={CatalogStyle.list}>
                    <CatalogItemList
                      id={item.id}
                      name={item.name}
                      imgUrl={item.imgUrl}
                      variations={item.variations}
                    />
                  </li>
                </ItemsWrapper>
              </SingleItemWrapper>
            </div>
          </section>
        </React.Fragment>
      ))}

      <ModalChooseItemSize />
    </>
  );
};

export default SingleItem;
