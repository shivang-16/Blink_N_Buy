import prisma from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";
import isAuthenticated, { CustomApiRequest } from "@/middlewares/auth";

export default async function handler(
  req: CustomApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    isAuthenticated(req, res, async () => {
      if (req.method === "GET") {
        let user = await prisma.user.findUnique({
          where: {
            id: req.userId,
          },
        });

        if (!user)
          return res
            .status(400)
            .json({ success: false, message: "User does not exist" });

        res.status(200).json({ success: true, user });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Request not allowed" });
      }
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
