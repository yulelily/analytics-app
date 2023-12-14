import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";
import parseToJson from "@/libs/parseToJson";

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

    const parsedVid = parseToJson(vid);
    return res.status(200).json(parsedVid);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
