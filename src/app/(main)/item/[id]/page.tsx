import SingleItem from "../../../../components/shared/single-item";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ItemPage({ params }: Props) {
  const { id } = await params;

  return <SingleItem id={Number(id)} />;
}
