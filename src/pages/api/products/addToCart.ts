import prisma from "@/backend/db/db";
import { NextApiResponse } from "next";
import isAuthenticated  from "@/backend/middlewares/auth";
import { CustomApiRequest } from "@/types/global";

export default async function handler(
  req: CustomApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    isAuthenticated(req, res, async () => {
      if (req.method === "POST") {
        const productId = req.query.productId as string;

        await prisma.cartItem.create({
          data: {
            productId,
            userId: req.userId,
          },
        });
        res
          .status(200)
          .json({ success: true, message: "Product Added to Cart" });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Request not allowed" });
      }
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
