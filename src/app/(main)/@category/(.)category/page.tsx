"use client";

import React from "react";

import MobileModalCategory from "../../../../components/ui/category-modal";

import { useUIStore } from "../../../../store";

export default function MobModalCategory() {
  const modalCategory = useUIStore((state) => state.modalCategory);

  return modalCategory && <MobileModalCategory />;
}
