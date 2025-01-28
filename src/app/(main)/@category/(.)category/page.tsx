"use client";

import MobileModalCategory from "../../../../components/shared/category-modal";

import { useUIStore } from "../../../../store";

export default function MobModalCategory() {
  const isModalCategoryOpen = useUIStore((state) => state.isModalCategoryOpen);

  return isModalCategoryOpen && <MobileModalCategory />;
}
