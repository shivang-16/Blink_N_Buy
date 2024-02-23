import React from "react";
import { Text, Img, Button, Line } from "../../helpers";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated } = useAppSelector((state) => state?.user);

  return (
    <>
      <header className="flex items-center justify-center max-[720px]:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-[88%] max-[720px]:w-full">
            <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-5 items-center justify-start w-full">
              <div className="flex max-[720px]:flex-1 flex-row gap-2 items-center justify-start w-[7%] max-[720px]:w-full">
                <Img
                  className="h-6 w-[35%]"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Text
                  className="text-2xl max-[720px]:text-[22px] text-gray-800 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Blink&Buy{" "}
                </Text>
              </div>
              <div className="bg-white-A700 border-2 border-gray-50 border-solid flex max-[720px]:flex-1 flex-row sm:gap-10 items-center justify-between mb-[5px] max-[720px]:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[36%] max-[720px]:w-full">
                <Text
                  className="text-gray-500_87 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Search here
                </Text>
                <div className="bg-gray-800 h-12 max-[720px]:h-[18px] p-4 relative w-12">
                  <Img
                    className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              </div>
              <Img
                className="h-6 max-[720px]:ml-[0] ml-[304px] w-20"
                src="images/img_car_24X80.svg"
                alt="car"
              />
              <Link href={`/${isAuthenticated ? "" : "login"}`}>
                <Button
                  className="cursor-pointer font-bold leading-[normal] ml-8 max-[720px]:ml-[0] text-center text-sm w-[107px]"
                  shape="square"
                  color="gray_800"
                  size="md"
                  variant="fill"
                >
                  {isAuthenticated ? "Logout" : "Login"}
                </Button>
              </Link>
            </div>
            <Line className="bg-gray-50 h-px mt-[19px] w-full" />
            <div className="flex max-[720px]:flex-col flex-row max-[720px]:gap-10 gap-20 items-start justify-start mt-[27px] w-auto max-[720px]:w-full">
              <Text
                className="text-gray-800 text-lg w-auto"
                size="txtPoppinsRegular18Gray800"
              >
                Categories
              </Text>
              <Text
                className="text-gray-800 text-lg w-auto"
                size="txtPoppinsRegular18Gray800"
              >
                New Arrival
              </Text>
              <Text
                className="text-gray-800 text-lg w-auto"
                size="txtPoppinsRegular18Gray800"
              >
                Features
              </Text>
              <Text
                className="text-gray-800 text-lg w-auto"
                size="txtPoppinsRegular18Gray800"
              >
                Collections
              </Text>
              <Text
                className="text-gray-800 text-lg w-auto"
                size="txtPoppinsRegular18Gray800"
              >
                Discount
              </Text>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
