"use client";

import { useEffect, useState } from "react";
import Style from "./category.module.scss";
import Skeleton from "../../ui/skeleton/category";
import { useVariationStore, useSizeStore, useUIStore } from "../../../store";
import { PriceRange } from "../../ui/category";

const PriceFilter: React.FC = () => {
  const variations = useVariationStore((state) => state.variations);
  const isLoading = useSizeStore((state) => state.isLoading);

  const priceFrom = useUIStore((state) => state.priceFrom);
  const priceTo = useUIStore((state) => state.priceTo);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const setPriceFrom = useUIStore((state) => state.setPriceFrom);
  const setPriceTo = useUIStore((state) => state.setPriceTo);

  useEffect(() => {
    const prices = variations.map((item) => item.price);
    const max = prices.sort((a, b) => b - a)[0];
    const min = prices.sort((a, b) => a - b)[0];

    setMinPrice(min || 0);
    setMaxPrice(max || 0);
  }, [variations]);

  const handlePriceInputChange = (
    field: "minPrice" | "maxPrice",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);

    if (field === "minPrice") {
      if (value >= 0 && value <= 10000) {
        setPriceFrom(value);
      }
    } else if (field === "maxPrice") {
      if (value >= 0 && value <= 10000) {
        setPriceTo(value);
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
        <PriceRange
          id="price-from"
          name="price-from"
          label="From"
          placeholder={String(minPrice)}
          min={0}
          max={10000}
          value={priceFrom === 0 ? "" : priceFrom.toString()}
          handlePriceInputChange={(e) => handlePriceInputChange("minPrice", e)}
        />

        <PriceRange
          id="price-to"
          name="price-to"
          label="To"
          placeholder={String(maxPrice)}
          min={0}
          max={10000}
          value={priceTo === 0 ? "" : priceTo.toString()}
          showDollar
          handlePriceInputChange={(e) => handlePriceInputChange("maxPrice", e)}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
