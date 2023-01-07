"use client";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TagI } from "@interfaces/tag";
import Link from "next/link";

export default function Tag({ tags }: { tags: TagI[] }) {
  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollEnd, setScrollEnd] = useState<boolean>(false);
  const scrollElement = useRef() as React.MutableRefObject<HTMLDivElement>;

  tags = [{ name: "For you" }, ...tags];

  const searchParams = useSearchParams();
  let query = searchParams.get("feed");

  if (!query) {
    query = "For you";
  }

  const slide = (shift: number) => {
    scrollElement.current.scrollLeft += shift;
    setScrollX(scrollX + shift);
    if (
      Math.floor(
        scrollElement.current.scrollWidth -
        scrollElement.current.scrollLeft -
        30
      ) <= scrollElement.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollX(scrollElement.current.scrollLeft);
    if (
      Math.floor(
        scrollElement.current.scrollWidth -
        scrollElement.current.scrollLeft -
        30
      ) <= scrollElement.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    if (
      scrollElement?.current &&
      scrollElement?.current.scrollWidth <=
      scrollElement?.current.offsetWidth - 30
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }, [scrollElement.current?.scrollWidth, scrollElement.current?.offsetWidth]);

  return (
    <div className="flex items-center border-b-[1px] border-neutral-50 border-opacity-10 bg-[#1E1E1E] z-auto">
      {scrollX !== 0 && (
        <button onClick={() => slide(-150)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
            stroke="currentColor"
            width="1em"
            height="1em"
            strokeWidth="0"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
      )}
      <div
        className="flex items-center overflow-x-hidden"
        ref={scrollElement}
        onScroll={scrollCheck}
      >
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={tag.name === "For you" ? "/" : `/?feed=${tag.name}`}
            className={`flex items-center py-3 mx-6 h-full whitespace-nowrap capitalize ${tag.name === query ? "border-b-[1px] border-neutral-200" : ""}`}
          >
            {
              tag.name.replace(/-/g, " ")
            }
          </Link>
        ))}
      </div>
      {(!scrollEnd || scrollX === 0) && (
        <button onClick={() => slide(150)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
            stroke="currentColor"
            width="1em"
            height="1em"
            strokeWidth="0"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </button>
      )}
    </div>
  );
}
