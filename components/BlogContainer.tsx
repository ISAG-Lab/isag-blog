"use client";
import { useSearchParams } from "next/navigation";
import { BlogI } from "@interfaces/blog";
import BlogCard from "./BlogCard";

export default function BlogContainer({ blogs }: { blogs: BlogI[] }) {
  const searchParams = useSearchParams();

  const query = searchParams.get("feed");

  if (query) {
    blogs = blogs.filter((blog) => blog.tags.includes(query));
  }

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
}
