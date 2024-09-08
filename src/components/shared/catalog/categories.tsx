"use client";

import { useEffect, useState } from "react";

import { Button } from "../../ui/button";

import { Category, Item, Size, Variation } from "../../../types";

import Style from "./catalog.module.scss";

import {
  useCatalogStore,
  useCategoriesStore,
  useSizeStore,
  useVariationStore,
} from "../../../utils/store";

export const Categories: React.FC = () => {
  const catalog = useCatalogStore((state) => state.catalog);

  const categories = useCategoriesStore((state) => state.categories);
  const isLoading = useCategoriesStore((state) => state.isLoading);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);

  const sizeMenu = useSizeStore((state) => state.sizeMenu);
  const fetchSize = useSizeStore((state) => state.fetchSize);

  const variation = useVariationStore((state) => state.variation);
  const fetchVariation = useVariationStore((state) => state.fetchVariation);

  const [activeCategoriesMenu, setActiveCategoriesMenu] =
    useState("House Plants");
  const [activeSizeMenu, setActiveSizeMenu] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchSize();
  }, []);

  useEffect(() => {
    fetchVariation();
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

  return (
    <form action="#" method="post" className={Style.categories}>
      <div style={{ marginBottom: "35px" }}>
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

      <div style={{ marginBottom: "35px" }}>
        <h3 className={Style.title}>Price Range</h3>

        <div className={Style.price}>
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

      <div>
        <h3 className={Style.title}>Size</h3>

        <ul className={Style.lists}>
          {sizeMenu.map((item: Size, index: number) => (
            <li
              className={
                activeSizeMenu === item.name
                  ? `${Style.list} ${Style.active}`
                  : Style.list
              }
              onClick={() => setActiveSizeMenu(item.name)}
              key={index}
            >
              {item.name}
              <span>
                <span>{calculateQuantity(variation, item.id)}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button button={true} className="filter" value="Filter" />
    </form>
  );
};
