import Style from "./filter.module.scss";
import SortMenu from "./sort-menu";
import FilterMenu from "./filter-menu";

const Filters: React.FC = () => {
  return (
    <div className={Style.filter}>
      <FilterMenu />

      <SortMenu />
    </div>
  );
};

export default Filters;
