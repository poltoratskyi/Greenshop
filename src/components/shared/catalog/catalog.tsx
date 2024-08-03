import Style from "./catalog.module.scss";

import { Filter } from "./filter";
import { ProductList } from "./productList";

export const Catalog = () => {
  return (
    <section className={Style.catalog}>
      <div className="container">
        <Filter />

        <ProductList />
      </div>
    </section>
  );
};
