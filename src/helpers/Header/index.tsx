import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full">
          <div className="header-row mt-3 mb-[9px]">
            <div className="flex flex-row gap-2 items-start justify-center">
              <Img
                className="h-6 w-[35%]"
                src="images/img_volume.svg"
                alt="volume"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtPoppinsBold24"
              >
                Elliye{" "}
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bg-white-A700 border-2 border-gray-50 border-solid flex md:flex-1 flex-row sm:hidden items-center justify-between md:ml-[0] ml-[411px] sm:pl-5 pl-8 w-[32%] md:w-full">
            <Text
              className="text-gray-500_87 text-lg"
              size="txtPoppinsRegular18"
            >
              Search here
            </Text>
            <div className="bg-gray-800 h-12 md:h-[18px] p-3.5 relative w-12">
              <Img
                className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                src="defaultNoData.png"
                alt="search"
              />
            </div>
          </div>
          <Img
            className="h-6 sm:hidden md:ml-[0] ml-[304px] w-[5%]"
            src="images/img_car_1.svg"
            alt="car"
          />
          <Button
            className="cursor-pointer font-bold font-poppins sm:hidden leading-[normal] min-w-[107px] ml-8 md:ml-[0] text-center text-sm"
            shape="square"
            color="gray_800"
            size="md"
            variant="fill"
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
