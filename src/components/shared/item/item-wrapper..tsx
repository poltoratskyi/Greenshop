"use client";

import { useEffect, useState } from "react";

import { axiosCatalog } from "../../../service/catalog";

import { Variation } from "../../../types";

import Style from "./item.module.scss";

import { Item } from "./item";

interface Props {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  tags: string;
  sku: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  variations: Variation[];
  firstVariation?: Variation;
}
[];

export const ItemsWrapper: React.FC = () => {
  const [catalog, setCatalog] = useState<Props[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosCatalog();

        if (response) {
          setCatalog(response);
        }
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={Style.items}>
      <ul className={Style.lists}>
        {catalog.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
