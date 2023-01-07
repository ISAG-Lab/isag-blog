import type { NextApiRequest, NextApiResponse } from "next";
import { BlogI } from "@interfaces/blog";
import { getBlogsByTag } from "@lib/blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogI[]>
) {
  const tagName = req.query.tagName as string;
  const blogs = await getBlogsByTag(tagName);

  res.status(200).json(blogs);
}
