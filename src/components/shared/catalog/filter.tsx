import Style from "./catalog.module.scss";

import Sort from "../../../components/ui/sort-menu";
import FilterList from "./filter-list";

const Filter: React.FC = () => {
  return (
    <form className={Style.filter}>
      <FilterList />

      <Sort />
    </form>
  );
};

export default Filter;
