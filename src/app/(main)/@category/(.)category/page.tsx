"use client";

import MobileModalCategory from "../../../../components/ui/category-modal";

import { useUIStore } from "../../../../store";

export default function MobModalCategory() {
  const isModalCategoryOpen = useUIStore((state) => state.isModalCategoryOpen);

  return isModalCategoryOpen && <MobileModalCategory />;
}
