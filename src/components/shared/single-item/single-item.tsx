"use client";

import React, { useEffect } from "react";
import Style from "./single-item.module.scss";
import List from "./list";
import Pathname from "../../ui/pathname";
import SizeSelectionModal from "../../ui/size-selection-modal";
import Loader from "../../ui/loader";
import { useItemStore } from "../../../store";
import Slider from "./slider-wrapper";
import Title from "../title-wrapper";
import { Popup } from "../discount";
import { useDiscountStatus } from "../../../hooks";

interface Props {
  id: number;
}

const SingleItem: React.FC<Props> = ({ id }) => {
  const isLoading = useItemStore((state) => state.isLoading);
  const item = useItemStore((state) => state.item);
  const loadItem = useItemStore((state) => state.loadItem);

  const { discountStatus } = useDiscountStatus();

  useEffect(() => {
    loadItem(id);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Pathname />

        <section className={Style.singleItem}>
          <Loader item />;
        </section>
      </>
    );
  }

  return (
    <div>
      {item.map((item) => (
        <React.Fragment key={item.id}>
          <Pathname name={item.name} category={item.category} thirdPath />

          <section className={Style.singleItem}>
            <div className="container">
              <List
                id={item.id}
                name={item.name}
                imgUrl={item.imgUrl}
                sku={item.sku}
                tags={item.tags}
                shortDescription={item.shortDescription}
                category={item.category}
                variations={item.variations}
              />

              <Title title="Product Description" text>
                {item.extendedDescription}
              </Title>

              <Slider />
            </div>
          </section>
        </React.Fragment>
      ))}

      <SizeSelectionModal />

      {!discountStatus && <Popup />}
    </div>
  );
};

export default SingleItem;
