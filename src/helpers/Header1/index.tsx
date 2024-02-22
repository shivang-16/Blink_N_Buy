import React from "react";

import { Button, Img, Line, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end p-6 sm:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-2 items-start justify-center w-[6%] md:w-full">
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
            <Img
              className="h-6 md:ml-[0] ml-[541px] w-[5%]"
              src="images/img_car_1.svg"
              alt="car"
            />
            <Button
              className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[107px] ml-8 md:ml-[0] mr-[120px] text-center text-lg"
              shape="square"
              color="gray_800"
              size="sm"
              variant="fill"
            >
              Login
            </Button>
          </div>
          <Line className="bg-gray-50 h-px w-[85%]" />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
