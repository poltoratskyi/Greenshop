import Button from "../../shared/button";

import CategoriesListItems from "./categories-list-items";
import CategoriesInputPrice from "./categories-input-price";
import CategoriesSizeItems from "./categories-size-items";

const Categories: React.FC = () => {
  return (
    <form action="#" method="post">
      <CategoriesListItems />

      <CategoriesInputPrice />

      <CategoriesSizeItems />

      <Button button className="filter" value="Filter" />
    </form>
  );
};

export default Categories;
