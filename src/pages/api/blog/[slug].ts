import { NextApiRequest, NextApiResponse } from "next";
import Blog from "../../../types/blog.type";
import blogs from "../../../utils/blog";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const blog = blogs.find((b: Blog) => b.slug === slug);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  return res.status(200).json(blog);
}
