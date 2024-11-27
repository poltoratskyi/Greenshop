"use client";

import { useEffect, useState } from "react";

import { Size, Item, Variation } from "../../../types";

import Style from "./catalog.module.scss";

import Skeleton from "../../ui/skeleton/catalog/categories";

import {
  useCatalogStore,
  useSizeStore,
  useVariationStore,
} from "../../../utils/store";

const CategoriesSizeItems: React.FC = () => {
  const [activeSizeMenu, setActiveSizeMenu] = useState("");

  const isLoading = useCatalogStore((state) => state.isLoading);
  const catalog = useCatalogStore((state) => state.catalog);

  const sizeMenu = useSizeStore((state) => state.sizeMenu);
  const fetchSize = useSizeStore((state) => state.fetchSize);

  const variation = useVariationStore((state) => state.variation);
  const fetchVariation = useVariationStore((state) => state.fetchVariation);

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
      <div className={`${Style.categories} ${Style.size}`}>
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
    );
  }

  return (
    <div className={`${Style.categories} ${Style.size}`}>
      <h3 className={Style.title}>Size</h3>

      <ul className={Style.lists}>
        {sizeMenu.map((item: Size, index: number) => (
          <li
            className={
              activeSizeMenu === item.fullName
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
            onClick={() => setActiveSizeMenu(item.fullName)}
            key={index}
          >
            {item.fullName}
            <span>
              <span>{calculateQuantity(variation, item.id)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSizeItems;
