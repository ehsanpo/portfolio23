import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../assets/fonts/Mona-Sans-Regular.woff2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
