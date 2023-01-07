import BlogContainer from "@components/BlogContainer";
import Tag from "@components/Tag";

async function getBlogs() {
  const res = await fetch("http:/localhost:3000/api/blogs", { cache: 'no-store' });
  if (!res.ok) {
    return Error("Failed to fetch the blog");
  }

  const blogs = await res.json();
  return blogs;
}

async function getTags() {
  const res = await fetch("http:/localhost:3000/api/tags", { cache: 'no-store' });
  if (!res.ok) {
    return Error("Failed to fetch the tags");
  }

  const tags = await res.json();
  return tags;
}

export default async function RootPage() {
  const [blogs, tags] = await Promise.all([getBlogs(), getTags()]);

  return (
    <div className="text-gray-300">
      <div className="sticky top-0 z-20">
        <Tag tags={tags} />
      </div>
      <BlogContainer blogs={blogs} />
    </div>
  );
}
