import React from 'react'
import { Button,
  Img,
  Text, } from '@/helpers'
const HomePage = () => {

  
  return (
    <>
     <div className='flex my-10 justify-center'>
      <div className="flex max-[720px]:flex-1 flex-col gap-8 items-center justify-start w-[49%] max-[720px]:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-start p-[82px] max-[720px]:px-10 max-[540px]:px-5 w-full"
                style={{ backgroundImage: "url('images/img_02.png')" }}
              >
                <Text
                  className="my-[59px] text-4xl max-[540px]:text-[32px] max-[720px]:text-[34px] text-white-A700"
                  size="txtPoppinsRegular36"
                >
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    <>
                      Casual
                      <br />
                    </>
                  </span>
                  <span className="max-[720px]:text-[44px] max-[540px]:text-[38px] text-white-A700 font-playfairdisplay text-left text-5xl font-bold">
                    Collection
                  </span>
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[90px] max-[720px]:px-10 max-[540px]:px-5 w-full"
                style={{ backgroundImage: "url('images/img_01.png')" }}
              >
                <Text
                  className="mb-[47px] mt-[55px] text-4xl max-[540px]:text-[32px] max-[720px]:text-[34px] text-gray-800"
                  size="txtPoppinsRegular36Gray800"
                >
                  <span className="text-gray-800 font-poppins text-left font-normal">
                    <>
                      Summer <br />
                    </>
                  </span>
                  <span className="max-[720px]:text-[44px] max-[540px]:text-[38px] text-gray-800 font-playfairdisplay text-left text-5xl font-bold">
                    Collection
                  </span>
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[832px] items-start justify-start p-[79px] max-[720px]:px-10 max-[540px]:px-5"
              style={{ backgroundImage: "url('images/img_03.png')" }}
            >
              <Text
                className="mb-[332px] mt-56 text-4xl max-[540px]:text-[32px] max-[720px]:text-[34px] text-white-A700"
                size="txtPoppinsRegular36"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  <>
                    Big Vibe <br />
                  </>
                </span>
                <span className="max-[720px]:text-[44px] max-[540px]:text-[38px] text-white-A700 font-playfairdisplay text-left text-5xl font-bold">
                  Collection
                </span>
              </Text>
            </div>
           </div>
            <div className="flex flex-col gap-10 items-center justify-start max-w-[1632px] mt-[100px] mx-auto pt-2 max-[720px]:px-5 w-full">
            <div className="flex flex-row max-[720px]:gap-10 items-center justify-between w-full">
              <Text
                className="text-4xl max-[540px]:text-[32px] max-[720px]:text-[34px] text-gray-800"
                size="txtPoppinsBold36"
              >
                Featured
              </Text>
              <div className="flex flex-row gap-2 items-center justify-between w-[7%]">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  View all
                </Text>
                <Img
                  className="h-[31px] w-8"
                  src="images/img_menu.svg"
                  alt="menu"
                />
              </div>
            </div>
            <div className="flex max-[720px]:flex-col flex-row gap-8 items-center justify-between w-full">
              <div className="flex max-[720px]:flex-1 flex-col items-center justify-start pb-[7px] w-[33%] max-[720px]:w-full">
                <div
                  className="bg-contain bg-no-repeat h-[38rem] flex flex-col  p-14 max-[720px]:px-10 max-[540px]:px-5 w-full"
                  style={{
                    backgroundImage: "url('images/img_placeholder_16.png')",
                  }}
                >
                  <Text
                    className="mb-[541px] text-4xl max-[540px]:text-[32px] max-[720px]:text-[34px] text-center  text-gray-800"
                    size="txtPoppinsRegular36Gray800"
                  >
                    <span className="text-gray-800 font-poppins font-normal">
                      <>
                        Discover Our <br />
                      </>
                    </span>
                    <span className="text-gray-800 font-poppins font-bold">
                      Featured Product
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex max-[720px]:flex-1 flex-col items-center justify-start w-[66%] max-[720px]:w-full">
                <div className="max-[720px]:gap-5 gap-8 grid max-[540px]:grid-cols-1 max-[720px]:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_10.png"
                      alt="RectangleThirtyNine"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Green <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_11.png"
                      alt="RectangleThirtyNine One"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Black
                          <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_175X225.png"
                      alt="RectangleThirtyNine Two"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Blue Grey <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_13.png"
                      alt="RectangleThirtyNine Three"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Blue Denim <br />
                          Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_12.png"
                      alt="RectangleThirtyNine Four"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Casual <br />
                          Pink Shirt
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[23px] items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_rectangle39.png"
                      alt="RectangleThirtyNine Five"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-gray-800 max-[540px]:text-xl w-auto"
                        size="txtPoppinsMedium24Gray800"
                      >
                        Gray T-shirt
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_9.png"
                      alt="RectangleThirtyNine Six"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Purple <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[21px] items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_12.png"
                      alt="RectangleThirtyNine Seven"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-gray-800 max-[540px]:text-xl w-auto"
                        size="txtPoppinsMedium24Gray800"
                      >
                        Red Flannel
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtPoppinsMedium18Gray500"
                      >
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       




    </>
  )
}

export default HomePage