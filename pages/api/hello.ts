// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Creator = {
  name: string;
  github: string;
};

interface CreatorsI {
  creators: Creator[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreatorsI>
) {
  res.status(200).json({
    creators: [
      {
        name: "1tpp",
        github: "https://github.com/1tpp",
      },
      {
        name: "kitton",
        github: "https://github.com/kittonn",
      },
    ],
  });
}
