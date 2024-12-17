"use client";

import { useEffect, useState } from "react";

import { Category } from "../../../types";
import { getCategoryQuantity } from "../../../hooks";

import Style from "./catalog.module.scss";

import Skeleton from "../../ui/skeleton/category";

import { useCategoryStore } from "../../../store";

const CategoryItemsList: React.FC = () => {
  const [activeCategoryMenu, setActiveCategoryMenu] = useState("House Plants");

  const isLoading = useCategoryStore((state) => state.isLoading);

  const category = useCategoryStore((state) => state.category);
  const loadCategory = useCategoryStore((state) => state.loadCategory);

  useEffect(() => {
    loadCategory();
  }, []);

  if (isLoading) {
    return (
      <div className={Style.category}>
        <h3 className={Style.title}>Categories</h3>

        <ul className={Style.lists}>
          {isLoading &&
            [...new Array(9)].map((_, index: number) => (
              <Skeleton
                key={index}
                width="265"
                height="24"
                style={{
                  marginBottom: index === 8 ? "0" : "16px",
                }}
                uniqueKey="2"
              />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={Style.category}>
      <h3 className={Style.title}>Categories</h3>

      <ul className={Style.lists}>
        {category.map((item: Category) => (
          <li
            className={
              activeCategoryMenu === item.name
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
            onClick={() => setActiveCategoryMenu(item.name)}
            key={item.id}
          >
            {item.name}
            <span>
              <span>{getCategoryQuantity(category, item.id)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItemsList;
