import { prisma } from "../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import SingleItem from "../../../../components/shared/single-item/single-item";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Item({ params }: Props) {
  const { id } = await params;

  const item = await prisma.item.findFirst({
    where: { id: Number(id) },
    include: {
      variations: {
        include: {
          size: true,
        },
      },
    },
  });

  if (!item) {
    return notFound();
  }

  return <SingleItem item={item} />;
}
