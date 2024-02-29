import React from 'react'
import { Img, Text } from '@/helpers'
import { useRouter } from 'next/router'
import { ProductType } from '@/types/global'
import axios from 'axios'

const Product = ({img, price, productName, alt, onClick}:ProductType) => {

  const router = useRouter()
  return (
    <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full" onClick={onClick}>
    <Img
      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
      src={img}
      alt={alt}
    />
    <div className="flex flex-col gap-2 items-center justify-start w-auto">
      <Text
        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
        size="txtPoppinsMedium24Gray800"
      >
        <>
          {productName}
        </>
      </Text>
      <Text
        className="text-gray-500 text-lg w-auto"
        size="txtPoppinsMedium18Gray500"
      >
        ${price}
      </Text>
    </div>
  </div>
  )
}

export default Product