import { ParamsProps } from "@interfaces/util";
import { use } from "react";
import { getBlogsByTag } from "@lib/tag";
import BlogContainer from "@components/BlogContainer";

const getInitialBlogsByTag = async (tag: string) => {
  const blogsByTag = getBlogsByTag(tag);
  return blogsByTag;
};

export default function Page({ params }: ParamsProps) {
  const blogsByTag = use(getInitialBlogsByTag(params.slug));
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-300">#{params.slug}</h1>
      <BlogContainer blogs={blogsByTag} />
    </div>
  );
}
