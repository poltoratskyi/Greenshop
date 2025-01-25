import Button from "../button";
import CategoryItemsList from "./category-items-list";
import CategoryPriceInput from "./category-price-input";
import CategoryItemsSize from "./category-items-size";

const Category: React.FC = () => {
  return (
    <form action="#" method="post">
      <CategoryItemsList />

      <CategoryPriceInput />

      <CategoryItemsSize />

      <Button button className="filter" value="Filter" />
    </form>
  );
};

export default Category;
