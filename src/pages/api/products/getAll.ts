import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db/db";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
   
try {
   
   if (req.method == 'GET') {
        
    const products = await prisma.products.findMany()
    res.status(200).json({success: true, products})
   } else {
    return res.status(400).json({ success: false, message: "Request not allowed"});

   }
} catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error"});

}
}
