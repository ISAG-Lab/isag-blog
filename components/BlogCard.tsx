import { BlogI } from "@interfaces/blog";
import Link from "next/link";
import Image from "next/image";
import { dateFormatter } from "@lib/dateFormatter";
import { shortify } from "@lib/shortify";

export default function BlogCard({ blog }: { blog: BlogI }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="mt-12 grid grid-cols-3 rounded-lg bg-[#615E5E] text-[#D8D6D6] p-6 z-10"
    >
      <div className="col-span-2">
        <p className="text-sm mb-2">
          {blog.author} - <span>{dateFormatter(blog.date)}</span>
        </p>
        <div>
          <h2 className="text-[#FFFFFF] text-lg font-semibold">{blog.title}</h2>
          <p className="text-[#F2F2F2] mt-2 text-sm">{shortify(blog.description, 125)}</p>
        </div>
        <p className="text-sm mt-8">
          <span className="text-white bg-[#8A8A8A] py-[1px] px-3 rounded-full mr-2 capitalize">{blog.tags[0].replace(/-/g, " ")}</span> {blog.readingTime} min read
        </p>
      </div>
      <div className="relative h-32 w-32 justify-self-end bg-red-200">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
