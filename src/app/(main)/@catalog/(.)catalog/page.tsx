"use client";

import React from "react";

import CatalogPage from "../../catalog/page";
import { useUIStore } from "../../../../utils/store";

export default function Catalog() {
  const modalCatalog = useUIStore((state) => state.modalCatalog);

  return modalCatalog && <CatalogPage />;
}
