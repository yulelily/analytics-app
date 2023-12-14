import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { videoId } = req.query;

    if (!videoId || typeof videoId !== "string") {
      throw new Error("Invalid video ID");
    }

    const vid = await prisma.video.findUnique({
      where: {
        videoId: videoId,
      },
    });

    return res.status(200).json(vid);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
