import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const sussieFont = localFont({
  src: [
    {
      path: "./fonts/fonnts.com-Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal"
    }
  ],
  variable: "--font-sussie"
});

export { geistMono, geistSans, sussieFont };
