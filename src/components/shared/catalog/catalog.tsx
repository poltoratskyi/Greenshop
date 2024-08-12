import Style from "./catalog.module.scss";

import { Categories } from "./categories";
import { Filter } from "./filter";
import { ItemsWrapper } from "../items-list";

export const Catalog: React.FC = () => {
  return (
    <section className={Style.catalog}>
      <div className="container">
        <div className={Style.content}>
          <aside className={Style.wrapper}>
            <Categories />
          </aside>

          <div style={{ width: "100%" }}>
            <Filter />

            <ItemsWrapper />
          </div>
        </div>
      </div>
    </section>
  );
};
