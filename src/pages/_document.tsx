import { Html, Head, Main, NextScript } from "next/document";
// import Navbar from "../components/navbar/Navbar";
import Footer from "../helpers/footer/Footer";
import Footer1 from "@/components/Footer1";
import Navbar from "../components/navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer1 className="bg-gray-800 flex items-center justify-center max-[720px]:px-5 w-full" />
      </body>
    </Html>
  );
}
