import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "@/helpers";
// import Footer from '@/helpers/footer/Footer'
import Navbar from "@/components/navbar";
import Product from "../Product";
import axios from "axios";
import { Props } from "next/script";
import { useAppSelector } from "@/lib/hooks";

const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductCategory = () => {

  const { products } = useAppSelector((state) => state.products)
  console.log(products, 'porducts hare here')

  const router = useRouter();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-9 items-center justify-start mx-auto w-full">
        <Navbar />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row gap-4 items-center justify-start ml-36 max-[720px]:ml-[0] max-[720px]:px-5 w-[11%] max-[720px]:w-full">
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
              Product List
            </Text>
          </div>
          <Text
            className="max-[720px]:ml-[0] ml-[858px] mt-[52px] text-4xl max-[540px]:text-[32px] max-[720px]:text-[34px] text-gray-800"
            size="txtPoppinsBold36"
          >
            Product List
          </Text>
          <div className="flex max-[720px]:flex-col flex-row gap-8 items-start justify-start max-w-[1632px] mt-[70px] mx-auto max-[720px]:px-5 w-full">
            <div className="flex max-[720px]:flex-1 flex-col items-start justify-start pt-1.5 w-[16%] max-[720px]:w-full">
              <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="text-gray-800 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    Categories
                  </Text>
                  <Line className="bg-bluegray-100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_cut_32X32.svg"
                      alt="cut"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Jacket
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_file.svg"
                      alt="file"
                    />
                    <Text
                      className="text-gray-800 text-lg w-auto"
                      size="txtPoppinsRegular18Gray800"
                    >
                      Shirt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_location_32X32.svg"
                      alt="location"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Pants
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_computer_32X32.svg"
                      alt="computer"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_settings_32X32.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Dress
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_signal_32X32.svg"
                      alt="signal"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Accesories
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_skirt_32X32.svg"
                      alt="Skirt"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      Skirt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_500.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtPoppinsRegular18Gray500"
                    >
                      View more
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-bluegray-100 h-px mt-8 w-full" />
              <div className="flex flex-col gap-8 items-start justify-start mt-[37px] w-[68%] max-[720px]:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  Filter by Price
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <CheckBox
                    className="leading-[normal] text-left text-lg"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="AllPrice"
                    id="AllPrice"
                    label="All Price"
                  ></CheckBox>
                  <div className="flex flex-row gap-4 items-center justify-start w-[87%] max-[720px]:w-full">
                    <Button
                      className="flex h-6 items-center justify-center w-6"
                      shape="square"
                      color="gray_800"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_checkedbox.svg" alt="Checkedbox" />
                    </Button>
                    <Text
                      className="text-gray-800 text-lg"
                      size="txtPoppinsRegular18Gray800"
                    >
                      $100 - $250
                    </Text>
                  </div>
                  <CheckBox
                    className="leading-[normal] text-left text-lg"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="250500"
                    id="250500"
                    label="$250 - $500"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-lg"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="7501000"
                    id="7501000"
                    label="$750 - $1.000"
                  ></CheckBox>
                  <CheckBox
                    className="leading-[normal] text-left text-lg"
                    inputClassName="h-6 mr-[5px] w-6"
                    name="10001500"
                    id="10001500"
                    label="$1000 - $1.500"
                  ></CheckBox>
                </div>
              </div>
              <Line className="bg-bluegray-100 h-px mt-8 w-full" />
              <div className="flex flex-col gap-8 items-start justify-start mt-[37px] w-[79%] max-[720px]:w-full">
                <Text
                  className="text-gray-800 text-lg"
                  size="txtPoppinsMedium18"
                >
                  Filter by Rating
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-center justify-start w-[34%] max-[720px]:w-full">
                    <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1_3.svg"
                      alt="StarOne"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-1/2 max-[720px]:w-full">
                    <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_star1_4.svg"
                        alt="StarOne One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_star2_2.svg"
                        alt="StarTwo"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-[67%] max-[720px]:w-full">
                    <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_star1_5.svg"
                        alt="StarOne Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_star2_3.svg"
                        alt="StarTwo One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_star3_1.svg"
                        alt="StarThree"
                      />
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-4 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex max-[720px]:flex-1 flex-row gap-4 items-center justify-start w-[84%] max-[720px]:w-full">
                      <Button
                        className="flex h-6 items-center justify-center w-6"
                        shape="square"
                        color="gray_800"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          src="images/img_checkedbox.svg"
                          alt="Checkedbox One"
                        />
                      </Button>
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_star1_6.svg"
                          alt="StarOne Three"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_star2_4.svg"
                          alt="StarTwo Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_star3_2.svg"
                          alt="StarThree One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_star5_24X24.svg"
                          alt="StarFive"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 items-center justify-between w-full">
                      <div className="border-[3px] border-bluegray-100 border-solid h-6 w-6"></div>
                      <div className="flex flex-row items-start justify-start w-auto">
                        {/* <RatingBar
                        className="flex justify-between w-[152px]"
                        value={5}
                        starCount={5}
                        activeColor="#fae952"
                        size={24}
                      ></RatingBar> */}
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex max-[720px]:flex-1 flex-col gap-8 items-center justify-start w-[84%] max-[720px]:w-full">
              <div className="flex max-[540px]:flex-col flex-row max-[720px]:gap-10 items-start justify-between pt-0.5 w-full">
                <Text
                  className="max-[540px]:mt-0 mt-1 text-gray-500 text-lg"
                  size="txtPoppinsMedium18Gray500"
                >
                  <span className="text-gray-500 font-poppins text-left font-medium">
                    Viewing{" "}
                  </span>
                  <span className="text-gray-800 font-poppins text-left font-medium">
                    20
                  </span>
                  <span className="text-gray-500 font-poppins text-left font-medium">
                    {" "}
                    of{" "}
                  </span>
                  <span className="text-gray-800 font-poppins text-left font-medium">
                    160
                  </span>
                  <span className="text-gray-500 font-poppins text-left font-medium">
                    {" "}
                    product
                  </span>
                </Text>
                {/* <SelectBox
                className="max-[540px]:flex-1 leading-[normal] text-gray-500 text-left text-lg w-[18%] max-[540px]:w-full"
                placeholderClassName="text-gray-500"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="sort"
                options={sortOptionsList}
                isSearchable={false}
                placeholder="Sort by: Newest Items"
                size="xs"
              /> */}
              </div>
              <div className="common-pointer flex flex-col gap-14 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="max-[720px]:gap-5 gap-8 grid max-[540px]:grid-cols-1 max-[720px]:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                  
                  {
                   products && products.map((el:any) => (
                      <Product
                      key={el.id}
                      img="images/img_placeholder_3.png"
                      price={el.price}
                      productName={el.productName}
                      onClick={() => router.push(`/${el.category}/${el.id}`)}
                    />
                    ))
                  }
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ProductCategory;

