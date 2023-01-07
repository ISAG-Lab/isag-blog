import { ParamsProps } from "@interfaces/util";
import BlogContainer from "@components/BlogContainer";

const getBlogsByTag = async (tag: string) => {
  const res = await fetch(`http:/localhost:3000/api/blogsByTag/${tag}`, { cache: 'no-store' });
  if (!res.ok) {
    return Error("Failed to fetch the blog by tag");
  }
  const blogsByTag = await res.json();

  return blogsByTag;
};


export default async function TagPage({ params }: ParamsProps) {
  const blogsByTag = await getBlogsByTag(params.slug)

  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-300">#{params.slug}</h1>
      <BlogContainer blogs={blogsByTag} />
    </div>
  );
}
