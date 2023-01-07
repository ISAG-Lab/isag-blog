// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BlogI } from "@interfaces/blog";
import { getBlogs } from "@lib/blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogI[]>
) {
  const blogs = await getBlogs();

  res.status(200).json(blogs);
}
