import React from 'react'
import { CardContainer, CardBody, CardItem } from '../../components/ui/3DCard'
import Image from 'next/image'

type props = {
    img_src: string
    product: string
    price: string
    catagory?: string
    description?: string

}

const Card = ({img_src, catagory, product, price, description}: props) => {
  return (
    <CardContainer className="inter-var m-5 ">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1] w-auto sm:w-[20rem] h-auto cursor-pointer p-3  rounded-xl">
    
        <CardItem translateZ="100" className="w-full ">
          <Image
            src={img_src}
            height="1000"
            width="1000"
            className="h-40 object-cover object-top w-full rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {catagory}
        </CardItem>
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {product}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {price}
        </CardItem>
    
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Check this out →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-red-900 dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Add to cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  
  )
}

export default Card