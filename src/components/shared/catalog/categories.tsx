"use client";

import { useState } from "react";

import Style from "./catalog.module.scss";
import { Button } from "../../ui/button";

const categoriesMenu = [
  { value: 33, label: "House Plants" },
  { value: 12, label: "Potter Plants" },
  { value: 65, label: "Seeds" },
  { value: 39, label: "Small Plants" },
  { value: 23, label: "Big Plants" },
  { value: 17, label: "Succulents" },
  { value: 19, label: "Trerrariums" },
  { value: 13, label: "Gardening" },
  { value: 18, label: "Accessories" },
];

const sizeMenu = [
  { value: 119, label: "Small" },
  { value: 86, label: "Medium" },
  { value: 78, label: "Large" },
];

export const Categories = () => {
  const [activeCategoriesMenu, setActiveCategoriesMenu] =
    useState("House Plants");
  const [activeSizeMenu, setActiveSizeMenu] = useState("");

  return (
    <form className={Style.categories}>
      <section style={{ marginBottom: "35px" }}>
        <h3 className={Style.title}>Categories</h3>

        <ul className={Style.lists}>
          {categoriesMenu.map((item, index) => (
            <li
              className={
                activeCategoriesMenu === item.label
                  ? `${Style.list} ${Style.active}`
                  : Style.list
              }
              onClick={() => setActiveCategoriesMenu(item.label)}
              key={index}
            >
              {item.label} <span>({item.value})</span>
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

        <Button className="filter" value="Filter" />
      </section>

      <section>
        <h3 className={Style.title}>Size</h3>

        <ul className={Style.lists}>
          {sizeMenu.map((item, index) => (
            <li
              className={
                activeSizeMenu === item.label
                  ? `${Style.list} ${Style.active}`
                  : Style.list
              }
              onClick={() => setActiveSizeMenu(item.label)}
              key={index}
            >
              {item.label} <span>({item.value})</span>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};
