"use client";

import { useEffect } from "react";
import { getSizeQuantity } from "../../../lib/client";
import Style from "./category.module.scss";
import Skeleton from "../../ui/skeleton/category";
import { useSizeStore, useVariationStore } from "../../../store";
import Checkbox from "../../ui/category/checkbox";

const SizeFilter: React.FC = () => {
  const sizeMenu = useSizeStore((state) => state.sizeMenu);
  const isLoading = useSizeStore((state) => state.isLoading);
  const loadSize = useSizeStore((state) => state.loadSize);
  const selectedSize = useSizeStore((state) => state.selectedSize);

  const variations = useVariationStore((state) => state.variations);
  const loadVariation = useVariationStore((state) => state.loadVariation);

  useEffect(() => {
    loadSize();
  }, []);

  useEffect(() => {
    loadVariation();
  }, []);

  if (isLoading) {
    return (
      <div className={Style.category}>
        <h3 className={Style.title}>Sizes</h3>

        <ul className={Style.lists}>
          {isLoading &&
            [...new Array(4)].map((_, index: number) => (
              <Skeleton
                key={index}
                width="100%"
                height={24}
                style={{
                  marginBottom: index === 3 ? "0" : "16px",
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
      <h3 className={Style.title}>Sizes</h3>

      <ul className={Style.lists}>
        {sizeMenu.map((item) => {
          const quantityItemsSize = getSizeQuantity(variations, item.id);
          const isDisabled = quantityItemsSize <= 0;

          return (
            <li
              className={`${
                isDisabled ? `${Style.list} ${Style.disabled}` : `${Style.list}`
              }`}
              key={item.id}
            >
              <Checkbox
                quantityItems={quantityItemsSize}
                isDisabled={isDisabled}
                onSelectedName={() => selectedSize(item.fullName, true)}
                onUnselectedName={() => selectedSize(item.fullName, false)}
                name={item.fullName}
                inputId={`category-item-size-${item.id}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SizeFilter;
