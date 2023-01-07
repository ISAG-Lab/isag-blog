import type { NextApiRequest, NextApiResponse } from "next";
import { BlogI } from "@interfaces/blog";
import { getBlogBySlug } from "@lib/blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogI>
) {
  const slug = req.query.slug as string;
  const blog = await getBlogBySlug(slug);

  res.status(200).json(blog);
}
