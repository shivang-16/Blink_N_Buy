import Image from "next/image";
import { Inter } from "next/font/google";
import CustomCarousel from "../components/carousel/Carousel";
import PinCard from "@/components/ui/PinCard";
import Card from "@/components/Card/Card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3DCard";
import { useEffect, useState } from "react";
import { CustomBentoGrid } from "@/components/BentoGrid/BentoGrid";
import { BackgroundBoxes } from "@/components/BackgroundBoxes/BackgroundBoxes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // const [products, setProducts] = useState<[{}]>([{}])

  // const getProducts = async() => {
  //   const response = await fetch('https://dummyjson.com/products')
  //   const products = await response.json()
  //   setProducts(products.products)
  //   console.log(products, "products")

  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])
  return (
   <>

  <CustomCarousel/>   
  <section className="text-gray-600 body-font flex flex-wrap justify-center">
   {/* {products && products.map((el:any) => {
      return <Card key={el?.id} catagory={el?.catagory} price={`$${el?.price}`} product={el?.title} description={el?.description} img_src={el?.images?.[0]}/>

   })} */}
   <CustomBentoGrid/>
   {/* <BackgroundBoxes/>  */}
</section>
   </>
  );
}
