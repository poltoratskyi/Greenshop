import ItemList from "./item-list";
import PriceFilter from "./price-filter";
import SizeFilter from "./size-filter";
import { useUpdateUrl } from "../../../hooks";

const Category: React.FC = () => {
  useUpdateUrl();

  return (
    <>
      <ItemList />

      <PriceFilter />

      <SizeFilter />
    </>
  );
};

export default Category;
