import Style from "./search-items-result.module.scss";
import TrendingList from "./trending-list";
import List from "./list";

const SearchResults: React.FC = () => {
  return (
    <div className={Style.results}>
      <div className={Style.content}>
        <div className={Style.category}>
          <h2 className={Style.title}>Trending searches</h2>

          <TrendingList />
        </div>

        <List />
      </div>
    </div>
  );
};

export default SearchResults;
