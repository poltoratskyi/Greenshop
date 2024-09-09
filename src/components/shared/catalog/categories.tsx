"use client";

import { useEffect, useState } from "react";

import Button from "../../ui/button";

import { Category, Item, Size, Variation } from "../../../types";

import Style from "./catalog.module.scss";

import {
  useCatalogStore,
  useCategoriesStore,
  useSizeStore,
  useVariationStore,
} from "../../../utils/store";

import Skeleton from "../../ui/skeleton/catalog/categories";

const Categories: React.FC = () => {
  const catalog = useCatalogStore((state) => state.catalog);
  const isLoading = useCatalogStore((state) => state.isLoading);

  const categories = useCategoriesStore((state) => state.categories);
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

  if (isLoading) {
    return (
      <form action="#" method="post" className={Style.categories}>
        <div style={{ marginBottom: "35px" }}>
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

        <div style={{ marginBottom: "35px" }}>
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

        <div>
          <h3 className={Style.title}>Size</h3>

          <ul className={Style.lists}>
            {isLoading &&
              [...new Array(4)].map((_, index: number) => (
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

        {isLoading &&
          [...new Array(1)].map((_, index: number) => (
            <Skeleton
              key={index}
              width={"100%"}
              height={"50px"}
              viewBox={"0 0 270 50"}
              style={{ marginTop: "35px" }}
              uniqueKey="4"
            />
          ))}
      </form>
    );
  }

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

export default Categories;
