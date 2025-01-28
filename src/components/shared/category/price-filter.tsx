"use client";

import { useState } from "react";
import Style from "./category.module.scss";
import Skeleton from "../skeleton/category";
import { useSizeStore } from "../../../store";
import PriceInput from "../../ui/price-input";

const PriceFilter: React.FC = () => {
  const isLoading = useSizeStore((state) => state.isLoading);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(999);

  const handlePriceFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceFrom(Number(value));
  };

  const handlePriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceTo(Number(value));
  };

  if (isLoading) {
    return (
      <div className={Style.category}>
        <h3 className={Style.title}>Price Range</h3>

        {isLoading &&
          [...new Array(1)].map((_, index: number) => (
            <Skeleton key={index} width="100%" height="40" uniqueKey="3" />
          ))}
      </div>
    );
  }

  return (
    <div className={Style.category}>
      <h3 className={Style.title}>Price Range</h3>

      <div className={Style.range}>
        <PriceInput
          id="price-from"
          name="price-from"
          label="From"
          placeholder="0"
          min={0}
          value={String(priceFrom)}
          handlePriceChange={handlePriceFromChange}
        />

        <PriceInput
          id="price-to"
          name="price-to"
          label="To"
          placeholder="999"
          max={999}
          value={String(priceTo)}
          showDollar
          handlePriceChange={handlePriceToChange}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
