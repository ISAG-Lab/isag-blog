import { ParamsProps } from "@interfaces/util";

const getBlog = async (slug: string) => {
  const res = await fetch(`http:/localhost:3000/api/blog/${slug}`, { cache: 'no-store' });
  if (!res.ok) {
    return Error("Failed to fetch the blog");
  }

  const blog = await res.json();
  return blog;
};

export default async function BlogPage({ params }: ParamsProps) {
  const blog = await getBlog(params.slug);
  return (
    <div>
      <article className="prose">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
  );
}
