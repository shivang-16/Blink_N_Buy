import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

interface DecodedToken {
    _id: string
}

export interface CustomApiRequest extends NextApiRequest {
    userId?: string
}

const isAuthenticated = async(req: CustomApiRequest, res:NextApiResponse, next: () => void) => {
  const tokenCookie = req.headers.cookie?.split(';').find((cookie) => cookie.trim().startsWith('token='));

  if (!tokenCookie) {
    return res.status(400).json({success: false, message: "Login into your account"}); 
  }

  const token = tokenCookie.split('=')[1];

  try {
    const decodedToken = await jwt.verify(token, 'process.env.JWT_SECRET') as DecodedToken;
console.log(decodedToken)
    req.userId = decodedToken._id
    next()
  } catch (error) {
    // Handle token verification failure
    console.error('Error verifying token:', error);
    return null;
  }
};

export default isAuthenticated