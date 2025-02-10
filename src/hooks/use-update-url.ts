"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useCategoryStore, useSizeStore } from "../store";

export const useUpdateUrl = () => {
  const selectedItemName = useCategoryStore((state) => state.selectedName);
  const selectedSizeName = useSizeStore((state) => state.selectedName);

  const router = useRouter();

  useEffect(() => {
    const query = qs.stringify(
      { categories: selectedItemName, sizes: selectedSizeName },
      { arrayFormat: "comma" }
    );

    router.push(`?${query}`.toLocaleLowerCase(), { scroll: false });
  }, [selectedItemName, selectedSizeName, router]);
};
