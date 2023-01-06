import { use } from "react";
import { getRecommendedTags } from "@lib/tag";
import Link from "next/link";

const getInitialRecommendedTags = async () => {
  const recommendedTags = getRecommendedTags();
  return recommendedTags;
};

export default function Sidebar() {
  const recommendedTags = use(getInitialRecommendedTags());

  return (
    <div className="fixed min-h-screen border-l-[1px] border-l-[#555454] px-4 py-12">
      <div className="relative text-[#8A8A8A] max-w-[300px]">
        <input
          type="text"
          className="w-full rounded-full border-[1px] border-[#615E5E] bg-[#1E1E1E] px-9 py-1 text-sm"
          placeholder="Search"
        />
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
      <div className="mt-6">
        <h3 className="font-semibold text-sm text-[#C1BFBF]">Recommended topics</h3>
        <div className="text-xs text-[#F2F2F2]">
          {recommendedTags.length === 0 ? (
            <p>No recommendations found</p>
          ) : (
            <div className="flex flex-wrap">
              {recommendedTags.map((tag, index) => (
                <Link href={`/tag/${tag.tag}`}
                  key={index}
                  className="mr-3 mt-3 rounded-full bg-[#8A8A8A] py-[1px] px-3 text-xs"
                >
                  {tag.tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
