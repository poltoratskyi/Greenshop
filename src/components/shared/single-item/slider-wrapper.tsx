"use client";

import { Item } from "../../../types";
import Slider from "../../ui/slider";

const SliderWrapper: React.FC = () => {
  const items: Item[] = [];

  try {
    const storedItems = localStorage.getItem("viewedProducts");

    if (storedItems) {
      items.push(...JSON.parse(storedItems));
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error);
  }

  return <>{items.length > 0 && <Slider items={items} />}</>;
};

export default SliderWrapper;
