"use client";

import { useEffect, useState } from "react";
import { getSizeQuantity } from "../../../lib";
import Style from "./catalog.module.scss";
import Skeleton from "../../ui/skeleton/category";
import { useSizeStore, useVariationStore } from "../../../store";
import Checkbox from "./checkbox";

const CategoryItemsSize: React.FC = () => {
  const [selectedSizeName, setSelectedSizeName] = useState("");
  const [selectedSizeId, setSelectedSizeId] = useState(Number);

  const isLoading = useSizeStore((state) => state.isLoading);
  const sizeMenu = useSizeStore((state) => state.sizeMenu);
  const loadSize = useSizeStore((state) => state.loadSize);

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
      <div className={`${Style.category} ${Style.size}`}>
        <h3 className={Style.title}>Size</h3>

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
    <div className={`${Style.category} ${Style.size}`}>
      <h3 className={Style.title}>Size</h3>

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
                onSelectedName={setSelectedSizeName}
                onSelectedId={setSelectedSizeId}
                id={item.id}
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

export default CategoryItemsSize;
