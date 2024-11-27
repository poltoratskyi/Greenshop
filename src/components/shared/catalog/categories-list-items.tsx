"use client";

import { useEffect, useState } from "react";

import { Category, Item, Variation } from "../../../types";

import Style from "./catalog.module.scss";

import Skeleton from "../../ui/skeleton/catalog/categories";

import {
  useCatalogStore,
  useCategoriesStore,
  useVariationStore,
} from "../../../utils/store";

const CategoriesListItems: React.FC = () => {
  const [activeCategoriesMenu, setActiveCategoriesMenu] =
    useState("House Plants");

  const isLoading = useCatalogStore((state) => state.isLoading);
  const catalog = useCatalogStore((state) => state.catalog);

  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);

  const variation = useVariationStore((state) => state.variation);

  useEffect(() => {
    fetchCategories();
  }, []);

  const calculateQuantity = (arr: Item[] | Variation[], value: number) => {
    if (arr === catalog) {
      const result = arr.filter((item) => item.categoryId === value);

      return result.length;
    } else if (arr === variation) {
      const result = arr.filter((item) => item.itemId === value);

      const total = result.reduce((acc, item) => {
        return acc + item.value;
      }, 0);

      return total;
    }
  };

  if (isLoading) {
    return (
      <div className={Style.categories}>
        <h3 className={Style.title}>Categories</h3>

        <ul className={Style.lists}>
          {isLoading &&
            [...new Array(9)].map((_, index: number) => (
              <Skeleton
                key={index}
                width={"100%"}
                height={"20px"}
                viewBox={"0 0 270 20"}
                style={{ marginBottom: "20px" }}
                uniqueKey="2"
              />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={Style.categories}>
      <h3 className={Style.title}>Categories</h3>

      <ul className={Style.lists}>
        {categories.map((item: Category) => (
          <li
            className={
              activeCategoriesMenu === item.name
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
            onClick={() => setActiveCategoriesMenu(item.name)}
            key={item.id}
          >
            {item.name}
            <span>
              <span>{calculateQuantity(catalog, item.id)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesListItems;
