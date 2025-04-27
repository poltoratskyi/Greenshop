"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import qs from "qs";
import {
  useCatalogStore,
  useCategoryStore,
  useSizeStore,
  useUIStore,
} from "../store";

export const useUpdateUrl = () => {
  const selectedCategoryNameIds = useCategoryStore(
    (state) => state.selectedNameIds
  );
  const selectedSizeNameIds = useSizeStore((state) => state.selectedNameIds);
  const loadCatalog = useCatalogStore((state) => state.loadCatalog);

  const selectedSortOption = useUIStore((state) => state.selectedSortOption);
  const selectedSortLabel = useUIStore((state) => state.selectedSortLabel);

  const priceFrom = useUIStore((state) => state.priceFrom);
  const priceTo = useUIStore((state) => state.priceTo);

  const router = useRouter();

  const queryParams = useMemo(
    () => ({
      category: selectedCategoryNameIds,
      size: selectedSizeNameIds,
      price_from: priceFrom !== 0 ? priceFrom : undefined,
      price_to: priceTo !== 0 ? priceTo : undefined,
      sort: selectedSortOption !== "" ? selectedSortOption : undefined,
      direction: selectedSortLabel !== "" ? selectedSortLabel : undefined,
    }),
    [
      selectedCategoryNameIds,
      selectedSizeNameIds,
      priceFrom,
      priceTo,
      selectedSortOption,
      selectedSortLabel,
    ]
  );

  const loadCatalogMemoized = useCallback(() => {
    loadCatalog({
      category: selectedCategoryNameIds,
      price_from: priceFrom,
      price_to: priceTo,
      size: selectedSizeNameIds,
      sort: selectedSortOption,
      direction: selectedSortLabel,
    });
  }, [queryParams]);

  useEffect(() => {
    const queryString = qs.stringify(queryParams, {
      arrayFormat: "comma",
      skipNulls: true,
    });

    router.push(`?${queryString}`, { scroll: false });

    loadCatalogMemoized();
  }, [queryParams]);
};
