import React from "react";

import { Img, Text } from "../../helpers";

type Footer1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer1: React.FC<Footer1Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col max-[720px]:gap-10 gap-[100px] items-center justify-center mb-8 mt-16 mx-auto w-[85%]">
          <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-5 items-start justify-evenly w-full">
            <div className="flex max-[720px]:flex-1 flex-col items-start justify-start pr-1.5 pt-1.5 w-[43%] max-[720px]:w-full">
              <div className="flex flex-row gap-2 items-start justify-start w-[17%] max-[720px]:w-full">
                <Img
                  className="h-6 w-[35%]"
                  src="images/img_group19.svg"
                  alt="GroupNineteen"
                />
                <Text
                  className="text-2xl max-[720px]:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24WhiteA700"
                >
                  Elliye{" "}
                </Text>
              </div>
              <Text
                className="leading-[32.00px] mt-[43px] text-gray-500 text-lg w-[53%] sm:w-full"
                size="txtPoppinsRegular18Gray500"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor .
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start mt-[37px] w-[61%] max-[720px]:w-full">
                <div className="flex flex-row gap-2 items-center justify-start pr-1 py-1 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    +1234567890
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start pr-1 py-1 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="mt-1 text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    elliye@support.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex max-[720px]:flex-1 flex-col gap-[45px] items-start justify-start pr-1 py-1 w-[17%] max-[720px]:w-full">
              <Text
                className="text-2xl max-[720px]:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24WhiteA700"
              >
                Product Links
              </Text>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Categories
                </Text>
                <Text
                  className="mt-5 text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  New Arrival
                </Text>
                <Text
                  className="mt-[25px] text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Features
                </Text>
                <Text
                  className="mt-6 text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Collections
                </Text>
              </div>
            </div>
            <div className="flex max-[720px]:flex-1 flex-col gap-[39px] items-start justify-end pr-1 py-1 w-[17%] max-[720px]:w-full">
              <Text
                className="mt-[3px] text-2xl max-[720px]:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24WhiteA700"
              >
                Company
              </Text>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  About
                </Text>
                <Text
                  className="mt-[21px] text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Blog
                </Text>
                <Text
                  className="mt-3.5 text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Careers
                </Text>
                <Text
                  className="mt-[18px] text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Services
                </Text>
                <Text
                  className="mt-[21px] text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Privacy Policy
                </Text>
                <Text
                  className="mt-3.5 text-gray-500 text-lg"
                  size="txtPoppinsRegular18Gray500"
                >
                  Terms of service
                </Text>
              </div>
            </div>
            <div className="flex max-[720px]:flex-1 flex-col items-start justify-start max-[720px]:mt-0 mt-1 w-[24%] max-[720px]:w-full">
              <Text
                className="text-2xl max-[720px]:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24WhiteA700"
              >
                Join our Newsletter
              </Text>
              <Text
                className="mt-[37px] text-gray-500 text-lg w-[87%] sm:w-full"
                size="txtPoppinsRegular18Gray500"
              >
                Drop your email below to get update, promotions, coupons, and
                more!
              </Text>
              <div className="bg-gray-800 border border-solid border-white-A700 flex flex-row items-center justify-between mt-[35px] sm:pl-5 pl-6 w-full">
                <Text
                  className="text-bluegray-100_87 text-lg tracking-[0.36px]"
                  size="txtPoppinsRegular18Bluegray10087"
                >
                  Enter your email
                </Text>
                <div className="bg-white-A700 max-[720px]:h-[31px] h-[60px] p-3.5 relative w-[60px]">
                  <Img
                    className="absolute h-[31px] inset-[0] justify-center m-auto w-8"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-bluegray-100 text-sm"
            size="txtPoppinsRegular14"
          >
            Copyright © 2021 Elliye. All Right Reseved
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
