import jwt from 'jsonwebtoken'
import { NextApiResponse } from 'next'

interface cookieType {
    user: any,
    res: NextApiResponse
    message: string
    statuscode: number
}
const sendCookie = async({user, res, message, statuscode}: cookieType): Promise<void> => {

    console.log(process.env.JWT_SECRET)

    const token = await jwt.sign({_id: user.id}, 'process.env.JWT_SECRET')

    res
    .status(statuscode)
    .setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Expires= 60 * 24 * 60 * 60`)
    .json({
      success: true,
      message,
      user,
    });

}


export default sendCookie