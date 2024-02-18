import prisma from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";
import sendCookie from "@/utils/sendCookie";
import bcrypt from 'bcrypt'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    if(req.method == 'POST'){
        const { name, email, password, role } = req.body
    
        let user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
    
        if(user) return res.status(400).json({success: false, message: "User already exists"})


        const hashedPassword = await bcrypt.hash(password, 10)

        const data: any = {
            name,
            email,
            password: hashedPassword,
          };
      
          if (role) {
            data.role = role;
          }
    
        user = await prisma.user.create({
            data
        })
    
        sendCookie({user, res, message: "Registered sucessfully", statuscode:201})
    } else {
        res.status(400).json({success: false, message: "Request not allowed"})

    }
    
  }
  