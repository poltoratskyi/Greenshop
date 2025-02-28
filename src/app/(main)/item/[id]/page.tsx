import Loader from "../../../../components/ui/loaders/suspense";
import SingleItem from "../../../../components/shared/single-item";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ItemPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <SingleItem id={Number(id)} />
    </Suspense>
  );
}
