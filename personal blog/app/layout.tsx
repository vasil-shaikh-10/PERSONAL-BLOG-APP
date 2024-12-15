import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Nunito} from 'next/font/google'
import Navbar from "./components/navbar/navbar";
import ClientOnly from "./components/ClientOnly";
import Model from "./components/models/Model";
import RegisterModel from "./components/models/RegisterModel";
import ToasterProvider from "./providers/TosterProviders";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "airbnb",
  description: "airbnb Clone",
};
const font = Nunito({
  subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModel/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
