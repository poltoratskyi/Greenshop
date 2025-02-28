"use client";

import { Item } from "../../../types";
import Slider from "../../ui/slider";

const SliderWrapper: React.FC = () => {
  const storedItems: Item[] = JSON.parse(
    localStorage.getItem("viewed products") || "[]"
  );

  return <>{storedItems.length > 0 && <Slider storedItems={storedItems} />}</>;
};

export default SliderWrapper;
