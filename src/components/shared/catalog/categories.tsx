"use client";

import { useState } from "react";

import { Button } from "../../ui/button";

import Style from "./catalog.module.scss";

const categoriesMenu = [
  { value: 33, title: "House Plants" },
  { value: 12, title: "Potter Plants" },
  { value: 65, title: "Seeds" },
  { value: 39, title: "Small Plants" },
  { value: 23, title: "Big Plants" },
  { value: 17, title: "Succulents" },
  { value: 19, title: "Terrariums" },
  { value: 13, title: "Gardening" },
  { value: 18, title: "Accessories" },
];

const sizeMenu = [
  { value: 119, title: "Small" },
  { value: 86, title: "Medium" },
  { value: 78, title: "Large" },
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
                activeCategoriesMenu === item.title
                  ? `${Style.list} ${Style.active}`
                  : Style.list
              }
              onClick={() => setActiveCategoriesMenu(item.title)}
              key={index}
            >
              {item.title} <span>({item.value})</span>
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
                activeSizeMenu === item.title
                  ? `${Style.list} ${Style.active}`
                  : Style.list
              }
              onClick={() => setActiveSizeMenu(item.title)}
              key={index}
            >
              {item.title} <span>({item.value})</span>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};
