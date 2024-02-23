import React from 'react'
import { useRouter } from 'next/router'
import {   
    Button,
    CheckBox,
    Img,
    Input,
    Line,
    List,
    RatingBar,
    SelectBox,
    Text, } from '@/helpers'
// import Footer from '@/helpers/footer/Footer' 
import Navbar from '@/components/navbar'


const sortOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

const ProductCategory = () => {

    const router = useRouter()
    console.log(router, "router")
  return (
    <>
    <div className="bg-white-A700 flex flex-col font-poppins gap-9 items-center justify-start mx-auto w-full">
      <Navbar/>
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
            <div
              className="common-pointer flex flex-col gap-14 items-center justify-start w-full"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="max-[720px]:gap-5 gap-8 grid max-[540px]:grid-cols-1 max-[720px]:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_3.png"
                      alt="placeholder"
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
                      src="images/img_placeholder_1.png"
                      alt="placeholder One"
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
                      src="images/img_shoesisolated.png"
                      alt="placeholder Two"
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
                      src="images/img_placeholder_4.png"
                      alt="placeholder Three"
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
                      src="images/img_placeholder_245X245.png"
                      alt="placeholder Four"
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_2.png"
                      alt="placeholder Five"
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
                      src="images/img_rectangle39_245X245.png"
                      alt="placeholder Six"
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
                  <div className="flex flex-1 flex-col gap-[21px] items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_250X250.png"
                      alt="placeholder Seven"
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
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_631X384.png"
                      alt="placeholder Eight"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Casual <br />
                          Grey Shoes
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
                  <div className="flex flex-1 flex-col gap-5 items-center justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_sportj9bzxuy.png"
                      alt="placeholder Nine"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-gray-800 max-[540px]:text-xl w-auto"
                        size="txtPoppinsMedium24Gray800"
                      >
                        Pink Jacket
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
                      src="images/img_placeholder_5.png"
                      alt="placeholder Ten"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Black <br />
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
                      src="images/img_placeholder_15.png"
                      alt="placeholder Eleven"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Black
                          <br />
                          Brief Case
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
                      src="images/img_businessshirt.png"
                      alt="placeholder Twelve"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Modern Classic
                          <br />
                          Watch
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
                      src="images/img_placeholder_177X177.png"
                      alt="placeholder Thirteen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Blue Denim <br />
                          Skirt
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
                      src="images/img_placeholder_400X521.png"
                      alt="placeholder Fourteen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Casual <br />
                          Classic Watch
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
                      src="images/img_placeholder_16.png"
                      alt="placeholder Fifteen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Black Adventure
                          <br />
                          Boots
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
                  <div className="flex flex-1 flex-col gap-4 justify-start pb-1 w-full">
                    <Img
                      className="h-[245px] max-[720px]:h-auto object-cover w-[245px]"
                      src="images/img_placeholder_6.png"
                      alt="placeholder Sixteen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start max-[720px]:ml-[0] ml-[50px] w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Black Formal
                          <br />
                          Highheels
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
                      src="images/img_travel8v7cnke.png"
                      alt="placeholder Seventeen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Brown <br />
                          Casual Shoes
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
                      src="images/img_warmpantspxl7.png"
                      alt="placeholder Eighteen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Gray <br />
                          Longpants
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
                      src="images/img_rectangle45.png"
                      alt="placeholder Nineteen"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-2xl max-[720px]:text-[22px] text-center text-gray-800 max-[540px]:text-xl"
                        size="txtPoppinsMedium24Gray800"
                      >
                        <>
                          Green
                          <br />
                          Sport Jacket
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
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Button
                  className="cursor-pointer h-[50px] leading-[normal] text-center text-lg w-[50px]"
                  shape="square"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer h-[51px] leading-[normal] text-center text-lg w-[51px]"
                  shape="square"
                  color="gray_500"
                  size="md"
                  variant="outline"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer h-[51px] leading-[normal] text-center text-lg w-[51px]"
                  shape="square"
                  color="gray_500"
                  size="md"
                  variant="outline"
                >
                  3
                </Button>
                <Img
                  className="h-6 w-6"
                  src="images/img_info_24X24.svg"
                  alt="info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductCategory