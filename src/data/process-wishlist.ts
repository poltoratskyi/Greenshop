import { CartItemVariation, WishlistResponse, WishlistItem } from "@/types";

interface WishlistDetails {
  id: number;
  createdAt: Date;
  wishlistItems: WishlistItem[];
}

export const processWishlistItems = (
  data: WishlistResponse
): WishlistDetails => {
  const wishlistItems = data.items.map((i) => ({
    id: i.id,

    itemId: i.itemId,
    variationId: i.variationId - 1,

    item: {
      id: i.item.id,

      name: i.item.name,
      imgUrl: i.item.imgUrl,
      itemId: i.itemId,
      sku: i.item.sku,

      categoryId: i.item.categoryId,

      variations: i.item.variations.map((variation: CartItemVariation) => ({
        id: variation.id,

        price: variation.price,
        sale: variation.sale,
        onSale: variation.onSale,
        stock: variation.stock,
        isAvailable: variation.isAvailable,

        sizeId: variation.size.id,

        size: {
          id: variation.size.id,
          shortName: variation.size.shortName,
          fullName: variation.size.fullName,
        },
      })),

      category: {
        id: i.item.category.id,

        name: i.item.category.name,
      },
    },
  }));

  return {
    id: data.id,
    createdAt: data.createdAt,

    wishlistItems,
  };
};
