import fetcher from "@/libs/fetcher";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetcher("http://localhost:3000/api/videos");
  // const data = await response.json();

  console.log(response);
  return res.status(200).json("ok");
}
