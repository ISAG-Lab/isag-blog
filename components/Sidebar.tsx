"use client";
import { useRouter } from 'next/navigation';

import { useState } from "react";
import { TagI } from "@interfaces/tag";
import Link from "next/link";

export default function Sidebar({
  recommendedTags,
}: {
  recommendedTags: TagI[];
}) {
  const router = useRouter()
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("search?" + search)
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="container mx-auto px-5 py-5 lg:fixed lg:min-h-screen lg:max-w-[300px] lg:border-l-[1px] lg:border-l-[#555454] lg:px-4 lg:py-16">
      <div className="relative text-[#8A8A8A]">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleSearch}
            value={search}
            className="w-full rounded-full border-[1px] border-[#555454] bg-[#1E1E1E] px-9 py-1 text-sm"
            placeholder="Search"
          />
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
          width="1em"
          height="1em"
          className="absolute top-1/2 left-3 -translate-y-1/2 transform"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </div>
      <div className="hidden lg:mt-6 lg:block">
        <h3 className="text-sm font-semibold text-[#C1BFBF]">
          Recommended topics
        </h3>
        <div className="text-xs text-[#F2F2F2]">
          {recommendedTags.length === 0 ? (
            <p>No recommendations found</p>
          ) : (
            <div className="flex flex-wrap">
              {recommendedTags.map((tag, index) => (
                <Link
                  href={`/tag/${tag.name}`}
                  key={index}
                  className="mr-3 mt-3 rounded-full bg-[#8A8A8A] py-[1px] px-3 text-xs capitalize"
                >
                  {tag.name.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
