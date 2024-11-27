"use client";

import React from "react";

import MobileModalCategories from "../../../../components/ui/modal-categories";

import { useUIStore } from "../../../../utils/store";

export default function MobModalCategories() {
  const modalCategories = useUIStore((state) => state.modalCategories);

  return modalCategories && <MobileModalCategories />;
}
