"use client";

import { useEffect, useState } from "react";
import Style from "./category.module.scss";
import Skeleton from "../skeleton/category";
import { useVariationStore, useSizeStore } from "../../../store";
import PriceInput from "../../ui/price-input";

const PriceFilter: React.FC = () => {
  const variations = useVariationStore((state) => state.variations);
  const isLoading = useSizeStore((state) => state.isLoading);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const prices = variations.map((item) => item.price);
    const maxPrice = prices.sort((a, b) => b - a)[0];
    const minPrice = prices.sort((a, b) => a - b)[0];

    setMinPrice(minPrice || 0);
    setMaxPrice(maxPrice || 0);
  }, [variations]);

  const handlePriceInputChange = (
    field: "minPrice" | "maxPrice",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);

    if (field === "minPrice") {
      if (value >= 0 && value <= 10000) {
        setMinPrice(value);
      }
    } else if (field === "maxPrice") {
      if (value >= 0 && value <= 10000) {
        setMaxPrice(value);
      }
    }
  };

  if (isLoading) {
    return (
      <div className={`${Style.category} ${Style.price}`}>
        <h3 className={Style.title}>Price</h3>

        {isLoading &&
          [...new Array(1)].map((_, index: number) => (
            <Skeleton key={index} width="100%" height="40" uniqueKey="3" />
          ))}
      </div>
    );
  }

  return (
    <div className={`${Style.category} ${Style.price}`}>
      <h3 className={Style.title}>Price</h3>

      <div className={Style.range}>
        <PriceInput
          id="price-from"
          name="price-from"
          label="From"
          placeholder={String(minPrice)}
          min={0}
          max={10000}
          value={String(minPrice)}
          handlePriceInputChange={(e) => handlePriceInputChange("minPrice", e)}
        />

        <PriceInput
          id="price-to"
          name="price-to"
          label="To"
          placeholder={String(maxPrice)}
          min={0}
          max={10000}
          value={String(maxPrice)}
          showDollar
          handlePriceInputChange={(e) => handlePriceInputChange("maxPrice", e)}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
