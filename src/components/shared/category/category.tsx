import ItemList from "./item-list";
import PriceFilter from "./price-filter";
import SizeFilter from "./size-filter";
import { useUpdateUrl } from "../../../hooks";
import MobileHeader from "./mobile-header";
import { useCategoryStore, useSizeStore, useUIStore } from "@/store";
import Style from "./category.module.scss";
import Button from "@/components/ui/button";

const Category: React.FC = () => {
  const isModalCategoryOpen = useUIStore((state) => state.isModalCategoryOpen);

  const selectedCategoryNameIds = useCategoryStore(
    (state) => state.selectedNameIds
  );
  const selectedSizeNameIds = useSizeStore((state) => state.selectedNameIds);

  const priceFrom = useUIStore((state) => state.priceFrom);
  const priceTo = useUIStore((state) => state.priceTo);

  const resetUI = useUIStore((state) => state.resetFilters);
  const resetSize = useSizeStore((state) => state.resetFilters);
  const resetCategory = useCategoryStore((state) => state.resetFilters);

  useUpdateUrl();

  const handleResetFilters = () => {
    resetUI();
    resetCategory();
    resetSize();
  };

  const hasFilters: boolean =
    selectedCategoryNameIds.length > 0 ||
    selectedSizeNameIds.length > 0 ||
    priceFrom !== 0 ||
    priceTo !== 0;

  return (
    <aside
      className={`${isModalCategoryOpen ? `${Style.aside} ${Style.visible}` : Style.aside}`}
    >
      {isModalCategoryOpen && <MobileHeader />}

      <div className={Style.content}>
        <ItemList />

        <SizeFilter />

        <PriceFilter />

        <Button
          disabled={!hasFilters}
          onClick={handleResetFilters}
          className="resetFilters"
          value="Reset Filters"
          type="button"
        />
      </div>
    </aside>
  );
};

export default Category;
