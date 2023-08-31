import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Rajdhani, Tomorrow } from "next/font/google";

const rajdhani_font = Rajdhani({
  weight: ["400", "600"],
  subsets: ["latin"],

  display: "swap",
});

const tomorrow_font = Tomorrow({
  weight: ["400", "600", "700"],
  subsets: ["latin"],

  display: "swap",
});

const hexa = localFont({
  src: [
    {
      path: "../assets/fonts/HexaframeCF-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/HexaframeCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        :root {
          --hexa-font: ${hexa.style.fontFamily};
          --rajdhani-font: ${rajdhani_font.style.fontFamily};
          --tomorrow-font: ${tomorrow_font.style.fontFamily};
        }
      `}</style>
    </div>
  );
}
