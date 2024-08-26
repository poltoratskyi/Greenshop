"use client";

import { useEffect, useState } from "react";

import { Button } from "../../ui/button";

import Style from "./catalog.module.scss";

import { axiosCategories } from "../../../service/categories";
import { axiosSize } from "../../../service/size";
import { axiosVariation } from "../../../service/variation";
import { axiosCatalog } from "../../../service/catalog";
import { Category, Item, Size, Variation } from "../../../types";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizeMenu, setSizeMenu] = useState<Size[]>([]);
  const [variation, setVariation] = useState<Variation[]>([]);
  const [catalog, setCatalog] = useState<Item[]>([]);

  const [activeCategoriesMenu, setActiveCategoriesMenu] =
    useState("House Plants");
  const [activeSizeMenu, setActiveSizeMenu] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosCategories();

        if (response) {
          setCategories(response);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSize = async () => {
      try {
        const response = await axiosSize();
        if (response) {
          setSizeMenu(response as Size[]);
        }
      } catch (err) {
        console.error("Error fetching size:", err);
      }
    };

    fetchSize();
  }, []);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await axiosCatalog();

        if (response) {
          setCatalog(response as Item[]);
        }
      } catch (err) {
        console.error("Error fetching Catalog:", err);
      }
    };

    fetchCatalog();
  }, []);

  useEffect(() => {
    const fetchVariation = async () => {
      try {
        const response = await axiosVariation();
        if (response) {
          setVariation(response);
        }
      } catch (err) {
        console.error("Error fetching variation:", err);
      }
    };

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
    <form className={Style.categories}>
      <section style={{ marginBottom: "35px" }}>
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
      </section>

      <section style={{ marginBottom: "35px" }}>
        <h3 className={Style.title}>Price Range</h3>

        <div className={Style.price}>
          <div className={Style.column}>
            <label htmlFor="price-from">From</label>
            <input id="price-from" placeholder="1" type="text" />
          </div>

          <div className={Style.column}>
            <label htmlFor="price-to">To</label>
            <input id="price-to" placeholder="999" type="text" /> $
          </div>
        </div>

        <Button button={true} className="filter" value="Filter" />
      </section>

      <section>
        <h3 className={Style.title}>Size</h3>

        <ul className={Style.lists}>
          {sizeMenu.map((item, index) => (
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
      </section>
    </form>
  );
};
