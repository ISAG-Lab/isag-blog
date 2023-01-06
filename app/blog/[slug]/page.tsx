import { ParamsProps } from "@interfaces/util";
import { use } from "react";
import { getBlogBySlug } from "@lib/blog";

const getInitialBlog = async (slug: string) => {
  const blogs = getBlogBySlug(slug);
  return blogs;
};

export default function Page({ params }: ParamsProps) {
  const blog = use(getInitialBlog(params.slug));
  return (
    <div>
      <article className="prose">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
  );
}
