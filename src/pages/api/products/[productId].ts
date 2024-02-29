import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/backend/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    if (req.method == "GET") {
      // Ensure productId is a string
      const productId = typeof req.query.productId === 'string' ? req.query.productId : undefined;

      if (!productId) {
        return res.status(400).json({ success: false, message: "Invalid product ID" });
      }

      const product = await prisma.products.findUnique({
        where: {
          id: productId,
        },
      });

      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }

      res.status(200).json({ success: true, product });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Request not allowed" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
