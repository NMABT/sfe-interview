import { NextApiRequest, NextApiResponse } from "next";
import blogs from "../../utils/blog";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  return res.status(200).json({
    count: blogs.length,
    blogs,
  });
}
