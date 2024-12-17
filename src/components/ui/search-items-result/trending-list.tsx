"use client";

import Style from "./search-items-result.module.scss";

import { useSearchStore } from "../../../store";

const TrendingList: React.FC = () => {
  const trending = useSearchStore((state) => state.trending);
  const setInputValue = useSearchStore((state) => state.setInputValue);

  return (
    <ul className={Style.lists}>
      {trending
        .sort((a, b) => b.rate - a.rate)
        .map((item, index) => (
          <li
            onClick={() => setInputValue(item.name)}
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
