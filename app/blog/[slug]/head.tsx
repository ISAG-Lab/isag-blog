import DefaultHead from "@components/DefaultHead";
import { ParamsProps } from "@interfaces/util";

const getBlog = async (slug: string) => {
  const res = await fetch(`http:/localhost:3000/api/blog/${slug}`, { cache: 'no-store' });
  if (!res.ok) {
    return Error("Failed to fetch the blog");
  }

  const blog = await res.json();
  return blog;
};

export default async function BlogHead({ params }: ParamsProps) {
  const blog = await getBlog(params.slug);

  return (
    <>
      <DefaultHead title={blog.title} description="ISAG's Blog Website.💡" />
    </>
  );
}
