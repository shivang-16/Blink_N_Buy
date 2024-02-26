import { NextApiRequest } from "next"

type UserType = {
    name: string,
    email: string,
}

type UserState = {
    loading: boolean,
    user: UserType,
    error ?: string,
    isAuthenticated: boolean
}

type fileType = {
    originalname: string,
    buffer: string
}


interface CustomApiRequest extends NextApiRequest {
    userId: string;
    files: fileType[]
  }