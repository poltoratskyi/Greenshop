import { Suspense } from "react";
import { prisma } from "../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import SingleItem from "../../../../components/shared/single-item/single-item";
import Loader from "../../../../components/shared/loaders/suspense";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Item({ params }: Props) {
  try {
    // Get the id
    const { id } = await params;

    // Get the item from the database
    const item = await prisma.item.findFirst({
      where: { id: Number(id) },

      select: {
        id: true,

        imgUrl: true,
        name: true,
        shortDescription: true,
        extendedDescription: true,
        sku: true,
        tags: true,

        variations: {
          select: {
            id: true,

            price: true,
            sale: true,
            onSale: true,

            sizeId: true,
            size: {
              select: {
                id: true,
                shortName: true,
                fullName: true,
              },
            },
          },
        },

        category: {
          select: {
            id: true,
            name: true,
          },
        },

        categoryId: true,
      },
    });

    if (!item) {
      return notFound();
    }

    return (
      <Suspense fallback={<Loader />}>
        <SingleItem item={item} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching item:", error);
    throw new Error("Error fetching item");
  }
}
