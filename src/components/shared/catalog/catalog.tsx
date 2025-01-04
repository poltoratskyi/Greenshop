"use client";

import { useEffect } from "react";

import Style from "./catalog.module.scss";

import { useCatalogStore } from "../../../store";

import Category from "./category";
import Skeleton from "../../ui/skeleton/catalog";
import ItemsWrapper from "./items-wrapper";
import ItemList from "./item-list";
import ModalChooseItemSize from "../../../components/ui/modal-choose-item-size";
import Filter from "./filter";

const Catalog: React.FC = () => {
  const catalog = useCatalogStore((state) => state.catalog);
  const isLoading = useCatalogStore((state) => state.isLoading);
  const loadCatalog = useCatalogStore((state) => state.loadCatalog);

  useEffect(() => {
    loadCatalog();
  }, []);

  if (isLoading) {
    return (
      <section className={Style.catalog}>
        <div className="container">
          <div className={Style.content}>
            <aside className={Style.wrapper}>
              <Category />
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
                        width={255}
                        height={380}
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
            <Category />
          </aside>

          <div style={{ width: "100%" }}>
            <Filter />

            <ItemsWrapper>
              {catalog.map((item) => (
                <li key={item.id} className={Style.list}>
                  <ItemList {...item} />
                </li>
              ))}
            </ItemsWrapper>
          </div>

          <ModalChooseItemSize />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
