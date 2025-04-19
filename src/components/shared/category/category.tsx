import ItemList from "./item-list";
import PriceFilter from "./price-filter";
import SizeFilter from "./size-filter";
import { useUpdateUrl } from "../../../hooks";
import MobileHeader from "./mobile-header";
import { useUIStore } from "@/store";
import Style from "./category.module.scss";

const Category: React.FC = () => {
  const isModalCategoryOpen = useUIStore((state) => state.isModalCategoryOpen);

  useUpdateUrl();

  return (
    <aside
      className={`${isModalCategoryOpen ? `${Style.aside} ${Style.visible}` : Style.aside}`}
    >
      {isModalCategoryOpen && <MobileHeader />}

      <div className={Style.content}>
        <ItemList />

        <SizeFilter />

        <PriceFilter />
      </div>
    </aside>
  );
};

export default Category;
