"use client";

import { useEffect } from "react";
import { getCategoryItemQuantity } from "../../../lib/client";
import Style from "./category.module.scss";
import Skeleton from "../../ui/skeleton/category";
import { useCategoryStore } from "../../../store";
import { Checkbox } from "../../ui/category";

const ItemList: React.FC = () => {
  const isLoading = useCategoryStore((state) => state.isLoading);

  const category = useCategoryStore((state) => state.category);
  const loadCategory = useCategoryStore((state) => state.loadCategory);
  const selectedNameIds = useCategoryStore((state) => state.selectedNameIds);
  const onSelectedItemIds = useCategoryStore(
    (state) => state.onSelectedItemIds
  );

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
                width="100%"
                height={24}
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
        {category.map((item) => {
          const quantityItems = getCategoryItemQuantity(category, item.id);
          const isDisabled = quantityItems <= 0;

          return (
            <li
              className={`${
                isDisabled ? `${Style.list} ${Style.disabled}` : `${Style.list}`
              }`}
              key={item.id}
            >
              <Checkbox
                quantityItems={quantityItems}
                isDisabled={isDisabled}
                checked={selectedNameIds.includes(item.id)}
                onToggle={() => onSelectedItemIds(item.id)}
                name={item.name}
                inputId={`category-item-list-${item.id}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
