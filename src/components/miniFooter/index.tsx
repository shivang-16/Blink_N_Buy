import React from 'react'
import { List, Img, Text } from '../../helpers'

const MiniFooter = () => {
  return (
    <>
     <List
            className="bg-gray-50 max-[540px]:flex-col flex-row gap-8 grid max-[540px]:grid-cols-1 max-[720px]:grid-cols-2 grid-cols-4 justify-center mt-[100px] max-[720px]:px-10 px-36 max-[540px]:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex max-[540px]:flex-1 flex-row gap-8 h-[217px] max-[720px]:h-auto items-center justify-start max-[540px]:pr-5 pr-8 py-16 w-96 max-[540px]:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_music.svg"
                alt="music"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Free Delivery
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex max-[540px]:flex-1 flex-row gap-8 h-[217px] max-[720px]:h-auto items-center justify-start max-[540px]:pr-5 pr-8 py-16 w-96 max-[540px]:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_computer.svg"
                alt="computer"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Payment Method
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex max-[540px]:flex-1 flex-row gap-8 h-[217px] max-[720px]:h-auto items-center justify-start max-[540px]:pr-5 pr-8 py-16 w-96 max-[540px]:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_clock.svg"
                alt="clock"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Warranty
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
            <div className="flex max-[540px]:flex-1 flex-row gap-8 h-[217px] max-[720px]:h-auto items-center justify-start max-[540px]:pr-5 pr-8 py-16 w-96 max-[540px]:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_music_65X65.svg"
                alt="music One"
              />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-gray-800 text-lg w-auto"
                  size="txtPoppinsBold18"
                >
                  Customer Support{" "}
                </Text>
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  <>
                    This free shipping
                    <br />
                    only for selected region
                  </>
                </Text>
              </div>
            </div>
          </List>
    </>
  )
}

export default MiniFooter