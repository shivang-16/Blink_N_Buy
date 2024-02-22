import React from 'react'


  import {   
    Button,
    Img,
    PagerIndicator,
    Slider,
    Text, } from '@/helpers';

const CustomisedCarousel = () => {

    const images = [
        {
            image: 'images/img_group2291.png'
        },
        {
            image: 'images/img_group2291.png'
        },
    ]
    const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  return (
   <>
      <div className="overflow-auto overflow-x-auto w-full">
      <div className="h-[750px] sm:h-[950px] md:px-5 relative w-full">
              <div className="h-[750px] m-auto w-full">
              <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingRight={26}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 2 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="m-auto w-full"
              
                //   renderDotsItem={({ isActive }) => {
                //     if (isActive) {
                //       return (
                //         <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative" />
                //       );
                //     }
                //     return (
                //       <div
                //         className="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                //         role="button"
                //         tabIndex={0}
                //       />
                //     );
                //   }}
                />
                 <PagerIndicator
                  className="absolute bottom-[4%] flex gap-2 h-3 left-[7%] w-28"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-800 w-3 relative"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-white-A700 w-3 relative"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
              <div className="absolute bottom-[4%] gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-center right-[0] shadow-bs w-auto">
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[34px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start mt-1 w-auto">
                    <Img
                      className="h-[39px] w-[39px]"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[35px] w-[68%]"
                      src="images/img_file.svg"
                      alt="file"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Shirt
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[39px] w-[45%]"
                      src="images/img_vector_68X43.svg"
                      alt="Vector One"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-800 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-7 w-[70%]"
                      src="images/img_cut.svg"
                      alt="cut"
                    />
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[30px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-[39px] w-1/2"
                      src="images/img_vector_68X48.svg"
                      alt="Vector Two"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-40 items-center justify-end p-[31px] sm:px-5 w-40">
                  <div className="flex flex-col gap-4 items-center justify-start mb-[3px] mt-[11px] w-auto">
                    <Img
                      className="h-8 w-2/5"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Accesories
                    </Text>
                  </div>
                </div>
              </div>
            </div>
      </div>
   </>
  )
}

export default CustomisedCarousel