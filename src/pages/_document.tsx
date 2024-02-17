import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
