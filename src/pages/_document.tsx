import { Html, Head, Main, NextScript } from "next/document";
// import Navbar from "../components/navbar/Navbar";
import Footer1 from "@/components/Footer1";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Document() {
  return (
    <Provider store={store}>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Footer1 className="bg-gray-800 flex items-center justify-center max-[720px]:px-5 w-full" />
          <Toaster />
        </body>
      </Html>
    </Provider>
  );
}
