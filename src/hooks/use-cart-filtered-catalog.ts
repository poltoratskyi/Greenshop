"use client";

import { useEffect } from "react";
import { useCartStore, useCatalogStore } from "../store";

export const useCartFilteredCatalog = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  const catalog = useCatalogStore((state) => state.catalog);
  const loadCatalog = useCatalogStore((state) => state.loadCatalog);

  useEffect(() => {
    loadCatalog();
  }, []);

  // Get cart items categories
  const itemCategories = cartItems.map((item) => item.category.name);

  // Get cart items ids
  const itemIdsInCart = cartItems.map((item) => item.itemId);

  const filteredItems = catalog
    .filter((item) => itemCategories.includes(item.category.name))
    .filter((item) => !itemIdsInCart.includes(item.id));

  const isEmpty = filteredItems.length === 0;

  return { cartItems, filteredItems, isEmpty };
};
