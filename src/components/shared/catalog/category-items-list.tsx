"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "qs";
import { getCategoryItemQuantity } from "../../../lib";
import Style from "./catalog.module.scss";
import Skeleton from "../../ui/skeleton/category";
import { useCategoryStore } from "../../../store";
import Checkbox from "./checkbox";

const CategoryItemsList: React.FC = () => {
  const router = useRouter();

  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(Number);

  const isLoading = useCategoryStore((state) => state.isLoading);

  const category = useCategoryStore((state) => state.category);
  const loadCategory = useCategoryStore((state) => state.loadCategory);

  /*   useEffect(() => {
    if (!selectedCategoryName) return;

    const query = qs.stringify({ category: selectedCategoryName });
    router.push(`?${query}`.toLocaleLowerCase(), { scroll: false });
  }, [selectedCategoryName]); */

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
                onSelectedName={setSelectedCategoryName}
                onSelectedId={setSelectedCategoryId}
                id={item.id}
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

export default CategoryItemsList;
