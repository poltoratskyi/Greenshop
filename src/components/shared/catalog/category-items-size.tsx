"use client";

import { useEffect, useState } from "react";

import { Size } from "../../../types";
import { getSizeQuantity } from "../../../hooks";

import Style from "./catalog.module.scss";

import Skeleton from "../../ui/skeleton/category";

import { useSizeStore, useVariationStore } from "../../../store";

const CategoryItemsSize: React.FC = () => {
  const [activeSizeMenu, setActiveSizeMenu] = useState("");

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
                height="24"
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
        {sizeMenu.map((item: Size) => (
          <li
            className={
              activeSizeMenu === item.fullName
                ? `${Style.list} ${Style.active}`
                : Style.list
            }
            onClick={() => setActiveSizeMenu(item.fullName)}
            key={item.id}
          >
            {item.fullName}
            <span>
              <span>{getSizeQuantity(variations, item.id)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItemsSize;
