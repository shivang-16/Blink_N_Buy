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

type ProductType = {
    img: string,
    price: number,
    productName: string,
    category?: string,
    alt?: string
    onClick: () => void
 }

type ProductState = {
    loading: boolean,
    product ?: ProductType[],
    error?: string,
}

interface CustomApiRequest extends NextApiRequest {
    userId: string;
    files: fileType[]
  }