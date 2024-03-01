import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/backend/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    if (req.method == "GET") {
      // Fetch cart items
      const cartItems = await prisma.cartItem.findMany({});

      // Check if cart is empty
      if (!cartItems || cartItems.length === 0) return res.status(404).json({ message: "No item present in cart" });

      // Fetch related product data for each cart item
      let allProducts = [];
      for (let cartItem of cartItems) {
        const product = await prisma.products.findUnique({
          where: {
            id: cartItem.productId, 
          },
        });
        if (product) {
          allProducts.push(product);
        }
      }

      res.status(200).json({ success: true, products: allProducts });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Request not allowed" });
    }
  } catch (error) {
    console.error(error); // It's a good practice to log the error
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
