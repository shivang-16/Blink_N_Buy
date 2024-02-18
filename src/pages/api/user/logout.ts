import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  // Set the 'token' cookie with an expiration date in the past
  res.setHeader('Set-Cookie', 'token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
  res.status(200).json({ success: true, message: 'Logout successful' });
}
