import Image from "next/image";
import { Inter } from "next/font/google";
import CustomCarousel from "../helpers/carousel/Carousel";
import PinCard from "@/components/ui/PinCard";
import Card from "@/helpers/Card/Card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3DCard";
import { useEffect, useRef, useState } from "react";
import { CustomBentoGrid } from "@/helpers/BentoGrid/BentoGrid";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "@/helpers";
import MiniFooter from "@/components/miniFooter";
import CustomisedCarousel from "@/components/CustomisedCarousel";
import HomePage from "@/components/Home";
import Navbar from "@/components/navbar";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getUser } from "@/redux/actions/userAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = useState(0);
  const { isAuthenticated } = useAppSelector((state) => state?.user);
  const dispatch = useAppDispatch()


   useEffect(() => {
    dispatch(getUser()) 
    },[dispatch])
  


  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font flex flex-wrap justify-center">
        <CustomisedCarousel />
        {/* <CustomCarousel /> */}
        <div className="flex flex-col justify-center gap-6">
          <Img
            className="h-[68px] mt-[115px] w-[969px]"
            src="images/img_vector_gray_500.svg"
            alt="Vector Three"
          />

          <HomePage />
        </div>

        <MiniFooter />
      </section>
    </>
  );
}
