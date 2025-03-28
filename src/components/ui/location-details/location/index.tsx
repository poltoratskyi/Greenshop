import React from "react";
import Styles from "./location.module.scss";
import { NominatimLocation } from "@/types";

interface LocationProps {
  data: NominatimLocation[];
  handleSuggestionClick: (item: NominatimLocation) => void;
}

const Location: React.FC<LocationProps> = ({ data, handleSuggestionClick }) => {
  return (
    <div className={Styles.result}>
      <ul className={Styles.lists}>
        {data.map((item, index) => (
          <li
            className={Styles.list}
            key={index}
            onClick={() => handleSuggestionClick(item)}
          >
            {item.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
