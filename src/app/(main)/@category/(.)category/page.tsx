"use client";

import React from "react";

import MobileModalCategory from "../../../../components/ui/modal-category";

import { useUIStore } from "../../../../store";

export default function MobModalCategory() {
  const modalCategory = useUIStore((state) => state.modalCategory);

  return modalCategory && <MobileModalCategory />;
}
