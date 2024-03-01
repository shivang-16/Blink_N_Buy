import prisma from "@/backend/db/db";
import { NextApiResponse } from "next";
import isAuthenticated from "@/backend/middlewares/auth";
import { CustomApiRequest } from "@/types/global";

export default async function handler(
  req: CustomApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    isAuthenticated(req, res, async () => {
      if (req.method === "POST") {
        const productId = req.query.productId as string;
        const userId = req.userId; 

        // Check if the product is already in the cart for the user
        const isIdFound = await prisma.cartItem.findMany({
          where: {
            productId: productId,
            userId: userId, 
          },
        });

        if (isIdFound.length > 0) {
          // If found, delete the item
          await prisma.cartItem.deleteMany({
            where: {
              productId: productId,
              userId: userId, 
            },
          });
          return res
            .status(200)
            .json({ success: true, message: "Product removed from Cart" });
        } else {
          // If not found, add the item to the cart
          await prisma.cartItem.create({
            data: {
              productId,
              userId: userId,
            },
          });
          res
            .status(200)
            .json({ success: true, message: "Product Added to Cart" });
        }
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
