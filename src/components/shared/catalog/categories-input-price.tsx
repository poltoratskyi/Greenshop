"use client";

import Style from "./catalog.module.scss";

import Skeleton from "../../ui/skeleton/catalog/categories";

import { useCatalogStore } from "../../../utils/store";

const CategoriesInputPrice: React.FC = () => {
  const isLoading = useCatalogStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className={Style.categories}>
        <h3 className={Style.title}>Price Range</h3>

        {isLoading &&
          [...new Array(1)].map((_, index: number) => (
            <Skeleton
              key={index}
              width={"100%"}
              height={"40px"}
              viewBox={"0 0 270 40"}
              uniqueKey="3"
            />
          ))}
      </div>
    );
  }

  return (
    <div className={Style.categories}>
      <h3 className={Style.title}>Price Range</h3>

      <div className={Style.range}>
        <div className={Style.column}>
          <label htmlFor="price-from">From</label>
          <input
            id="price-from"
            name="price-form"
            placeholder="1"
            type="text"
            autoComplete="off"
          />
        </div>

        <div className={Style.column}>
          <label htmlFor="price-to">To</label>
          <input
            id="price-to"
            name="price-form"
            placeholder="999"
            type="text"
            autoComplete="off"
          />
          $
        </div>
      </div>
    </div>
  );
};

export default CategoriesInputPrice;
