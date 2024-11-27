"use client";

import React from "react";

import ModalCategories from "../../../../components/ui/modal-categories";

import { useUIStore } from "../../../../utils/store";

export default function modalCategories() {
  const modalCategories = useUIStore((state) => state.modalCategories);

  return modalCategories && <ModalCategories />;
}
