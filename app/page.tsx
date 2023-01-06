import { use } from "react";
import { getBlogs } from "@lib/blog";
import { getAllTagsWithCount } from "@lib/tag";
import BlogContainer from "@components/BlogContainer";
import Tag from "@components/Tag";

const getInitialBlogs = async () => {
  const blogs = getBlogs();
  return blogs;
};

const getInitialTags = async () => {
  const tags = getAllTagsWithCount();
  return tags;
};

export default function Page() {
  const blogs = use(getInitialBlogs());
  const tags = use(getInitialTags());

  return (
    <div className="text-gray-300">
      <div>
        <Tag tags={tags} />
      </div>
      <BlogContainer blogs={blogs} />
    </div>
  );
}
