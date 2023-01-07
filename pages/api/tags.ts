// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TagI } from "@interfaces/tag";
import { getAllTags } from "@lib/tag";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TagI[]>
) {
  const tags = await getAllTags();

  res.status(200).json(tags);
}
