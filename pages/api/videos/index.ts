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
    const videos = await prisma.video.findMany({
      orderBy: {
        maxViewCount: "desc",
      },
    });

    return res.status(200).json(videos);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
