"use client";

import { useEffect } from "react";

import Style from "./catalog.module.scss";

import Categories from "./categories";
import Filter from "./filter";

import { useCatalogStore } from "../../../utils/store";

import Skeleton from "../../ui/skeleton/catalog/items";
import CatalogItems from "./catalog-items";
import List from "./list";

const Catalog: React.FC = () => {
  const catalog = useCatalogStore((state) => state.catalog);
  const isLoading = useCatalogStore((state) => state.isLoading);
  const fetchCatalog = useCatalogStore((state) => state.fetchCatalog);

  useEffect(() => {
    fetchCatalog();
  }, []);

  if (isLoading) {
    return (
      <section className={Style.catalog}>
        <div className="container">
          <div className={Style.content}>
            <aside className={Style.wrapper}>
              <Categories />
            </aside>

            <div style={{ width: "100%" }}>
              <Filter />

              <div className={Style.items}>
                <ul className={Style.lists}>
                  {isLoading &&
                    [...new Array(9)].map((_, index: number) => (
                      <Skeleton
                        className={Style.loader}
                        key={index}
                        uniqueKey="1"
                      />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={Style.catalog}>
      <div className="container">
        <div className={Style.content}>
          <aside className={Style.wrapper}>
            <Categories />
          </aside>

          <div style={{ width: "100%" }}>
            <Filter />

            <CatalogItems>
              {catalog.map((item) => (
                <li key={item.id} className={Style.list}>
                  <List control {...item} />
                </li>
              ))}
            </CatalogItems>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
