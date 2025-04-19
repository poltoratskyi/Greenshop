"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import qs from "qs";
import {
  useCatalogStore,
  useCategoryStore,
  useSizeStore,
  useUIStore,
} from "../store";
import { useDebounce } from "react-use";

export const useUpdateUrl = () => {
  const selectedCategoryNameIds = useCategoryStore(
    (state) => state.selectedNameIds
  );
  const selectedSizeNameIds = useSizeStore((state) => state.selectedNameIds);
  const loadCatalog = useCatalogStore((state) => state.loadCatalog);

  const selectedSortOption = useUIStore((state) => state.selectedSortOption);
  const selectedSortLabel = useUIStore((state) => state.selectedSortLabel);

  const router = useRouter();

  useEffect(() => {
    const query = qs.stringify(
      {
        category: selectedCategoryNameIds,
        size: selectedSizeNameIds,
        sort: selectedSortOption !== "" ? selectedSortOption : undefined,
        direction: selectedSortLabel !== "" ? selectedSortLabel : undefined,
      },
      { arrayFormat: "comma" }
    );

    router.push(`?${query}`, { scroll: false });
  }, [
    selectedCategoryNameIds,
    selectedSizeNameIds,
    selectedSortLabel,
    selectedSortOption,
  ]);

  useDebounce(
    () => {
      loadCatalog({
        category: selectedCategoryNameIds,
        size: selectedSizeNameIds,
        sort: selectedSortOption,
        direction: selectedSortLabel,
      });
    },
    200,
    [selectedCategoryNameIds, selectedSizeNameIds, selectedSortOption]
  );
};
