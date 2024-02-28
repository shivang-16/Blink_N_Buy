import prisma from "@/backend/db/db";
import { NextApiRequest, NextApiResponse } from "next";
import sendCookie from "@/backend/utils/sendCookie";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    if (req.method == "POST") {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User does not exists" });

      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched)
        return res
          .status(400)
          .json({ success: false, message: "Wrong password" });
      sendCookie({ user, res, message: "Login sucessfully", statuscode: 201 });
    } else {
      res.status(400).json({ success: false, message: "Request not allowed" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
