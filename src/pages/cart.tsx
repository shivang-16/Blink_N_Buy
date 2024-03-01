
import React from 'react'
import { Button, Img, Input, Line, List, Text } from "@/helpers";
import Navbar from '@/components/navbar';
import axios from 'axios';

const cart = (props:any) => {
    console.log(props)
  return (
    <>
    <div className="bg-white-A700 flex flex-col font-poppins gap-[35px] items-center justify-start mx-auto w-full">
      <Navbar />
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-row gap-4 items-start justify-start ml-36 max-[720px]:ml-[0] max-[720px]:px-5 w-[12%] max-[720px]:w-full">
          <Text
            className="text-gray-500 text-lg"
            size="txtPoppinsMedium18Gray500"
          >
            Home
          </Text>
          <Text
            className="text-bluegray-100 text-lg"
            size="txtPoppinsMedium18Bluegray100"
          >
            <>&gt;</>
          </Text>
          <Text className="text-gray-800 text-lg" size="txtPoppinsMedium18">
            Shopping Cart
          </Text>
        </div>
        <Text
          className="max-[720px]:ml-[0] ml-[826px] mt-[52px] text-4xl sm:text-[32px] max-[720px]:text-[34px] text-gray-800"
          size="txtPoppinsBold36"
        >
          Shopping Cart
        </Text>
        <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-5 items-center justify-start max-w-[1604px] mt-[100px] mx-auto max-[720px]:px-5 w-full">
        
        </div>
        <div className="flex flex-col max-[720px]:gap-10 gap-20 items-end justify-start max-w-[1632px] mt-20 mx-auto max-[720px]:px-5 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-start pt-1 w-full">
                <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-5 items-start justify-start w-4/5 max-[720px]:w-full">
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Product
                  </Text>
                  <Text
                    className="max-[720px]:ml-[0] ml-[590px] max-[720px]:mt-0 mt-[5px] text-gray-500 text-lg"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Quantity
                  </Text>
                  <Text
                    className="max-[720px]:ml-[0] ml-[231px] max-[720px]:mt-0 mt-[3px] text-gray-500 text-lg"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Price
                  </Text>
                  <Text
                    className="max-[720px]:ml-[0] ml-[232px] max-[720px]:mt-0 mt-1 text-gray-500 text-lg"
                    size="txtPoppinsMedium18Gray500"
                  >
                    Total
                  </Text>
                </div>
                <Line className="bg-bluegray-100 h-px w-full" />
              </div>
              <List
                className="flex flex-col gap-[31px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
                 {
                    props && props.products && props.products.map((el:any) => (
                       <>
                        <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-5 items-center justify-start w-full">
                        <div className="border border-bluegray-100 border-solid max-[720px]:h-[180px] h-[200px] p-6 sm:px-5 relative w-[200px]">
                          <Img
                            className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[180px]"
                            src="images/img_placeholder_2.png"
                            alt="placeholder"
                          />
                        </div>
                        <Text
                          className="max-[720px]:ml-[0] ml-[66px] text-2xl max-[720px]:text-[22px] text-gray-800 sm:text-xl"
                          size="txtPoppinsMedium24Gray800"
                        >
                          {el?.productName}
                        </Text>
                        <div className="h-12 max-[720px]:ml-[0] ml-[250px] relative w-[11%] max-[720px]:w-full">
                          <Button
                            className="absolute flex h-12 inset-y-[0] items-center justify-center my-auto right-[0] w-12"
                            shape="square"
                            color="gray_800"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-4"
                              src="images/img_grid.svg"
                              alt="grid"
                            />
                          </Button>
                          <div className="bg-gray-50 flex flex-col max-[720px]:h-auto h-full items-center justify-center my-auto p-4 w-12">
                            <div className="bg-gray-500 h-0.5 w-[57%]"></div>
                          </div>
                          <Button
                            className="absolute cursor-pointer font-medium h-full inset-[0] leading-[normal] m-auto text-center text-lg w-[171px]"
                            shape="square"
                            color="bluegray_100"
                            size="md"
                            variant="outline"
                          >
                            1
                          </Button>
                        </div>
                        <Text
                          className="max-[720px]:ml-[0] ml-[139px] text-2xl max-[720px]:text-[22px] text-gray-800 sm:text-xl"
                          size="txtPoppinsMedium24Gray800"
                        >
                          ${el?.price}
                        </Text>
                        <Text
                          className="max-[720px]:ml-[0] ml-[186px] text-2xl max-[720px]:text-[22px] text-gray-800 sm:text-xl"
                          size="txtPoppinsMedium24Gray800"
                        >
                          ${el?.price}
                        </Text>
                        <Img
                          className="h-[33px] max-[720px]:ml-[0] ml-[257px] w-[33px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                       </>
                    )) 
                 }
                 
                  <Line className="bg-bluegray-100 h-px w-full" />
                </div>
           
              </List>
            </div>
            <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-10 items-start justify-between pb-2 w-full">
              <div className="border border-bluegray-100 border-solid flex max-[720px]:flex-1 flex-row items-center justify-between pl-4 w-[29%] max-[720px]:w-full">
                <Text
                  className="text-gray-500_87 text-lg tracking-[0.36px]"
                  size="txtPoppinsRegular18"
                >
                  Enter coupon code
                </Text>
                <Button
                  className="cursor-pointer h-[60px] leading-[normal] min-w-[137px] text-center text-lg"
                  shape="square"
                  color="gray_800"
                  size="lg"
                  variant="fill"
                >
                  Apply Code
                </Button>
              </div>
              <div className="flex flex-col gap-[29px] items-end justify-start max-[720px]:mt-0 mt-1">
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsMedium18Gray500"
                >
                  Total
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] max-[720px]:text-[34px] text-gray-800"
                  size="txtPoppinsBold36"
                >
                  $202.00
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-8 items-center justify-end w-[26%] max-[720px]:w-full">
            <Button
              className="cursor-pointer font-medium h-12 leading-[normal] min-w-[207px] text-center text-lg"
              shape="square"
              color="gray_800"
              size="sm"
              variant="outline"
            >
              Continue Shopping
            </Button>
            <Button
              className="common-pointer cursor-pointer font-medium h-12 leading-[normal] text-center text-lg w-[171px]"
              shape="square"
              color="gray_800"
              size="md"
              variant="fill"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export const getServerSideProps = async () => {
    try {
      let products:[] = [];
      const { data } = await axios.get('http://localhost:3000/api/products/getCart');

      return {
        props: {
          products: data.products,
        },
      };
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return {
        props: {
          error: 'Failed to load the data.',
        },
      };
    }
  };
  

export default cart