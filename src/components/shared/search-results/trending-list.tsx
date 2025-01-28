"use client";

import Style from "./search-items-result.module.scss";
import { useSearchStore } from "../../../store";

const TrendingList: React.FC = () => {
  const trending = useSearchStore((state) => state.trending);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  return (
    <ul className={Style.lists}>
      {trending
        .sort((a, b) => b.rate - a.rate)
        .map((item, index) => (
          <li
            onClick={() => setSearchQuery(item.name)}
            key={index}
            className={Style.list}
          >
            {item.name}
            {item.svg}
          </li>
        ))}
    </ul>
  );
};

export default TrendingList;
