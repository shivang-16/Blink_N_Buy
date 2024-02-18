import prisma from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";
import isAuthenticated, { CustomApiRequest } from "@/middlewares/auth";

export default async function handler(
  req: CustomApiRequest,
  res: NextApiResponse
): Promise<void> {
   try {
    isAuthenticated(req, res, async () => {
      if (req.method === "POST") {
        const products = req.body.products;
     
        const user = await prisma.user.findUnique({
          where:{
            id: req.userId
          }
        })
  
        if(user?.role === 'customer') return res.status(400).json({ success: false, message: "You are not allowed" });
  
        const product = await prisma.products.createMany({
          data: products.map((product: any) => ({
            ...product,
            userId: req.userId,
          })),
        });
  
        res
          .status(200)
          .json({ success: true, message: "Product Added", product });
      } else {
        res.status(400).json({ success: false, message: "Request not allowed" });
      }
    });
   } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: "Internal server error"});
   }
}
