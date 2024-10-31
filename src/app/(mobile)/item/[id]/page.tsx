import { prisma } from "../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import SingleItem from "../../../../components/shared/single-item/single-item";

interface Props {
  params: { id: string };
}

const SingleItemPage: React.FC<Props> = async ({ params: { id } }) => {
  const item = await prisma.item.findUnique({
    where: { id: Number(id) },
    include: {
      variations: true,
    },
  });

  if (!item) {
    return notFound();
  }

  return <SingleItem item={item} />;
};

export default SingleItemPage;
