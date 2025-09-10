import SingleBlog from "@/components/shared/single-blog";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function BlogsPage({ params }: Props) {
  const { id } = await params;

  return <SingleBlog id={Number(id)} />;
}
