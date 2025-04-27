import type { Metadata } from "next";
import {Inter, Oxygen, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";
import siteicon from '@/app/favicon.png';

const inter = Inter({
  subsets: ["latin"], 
  variable: '--font-sans'});

const calistoga = Calistoga({
  subsets: ["latin"], 
  variable: '--font-serif',
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Prathik Portfolio",
  description: "Build Your Future",
  icons: [
    {
      url: './favicon.png',
      href: './favicon.png'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {twMerge(inter.variable, calistoga.variable, 
        "bg-black-jet text-white antialiased font-sans")}>
          {children}
      </body>
    </html>
  );
}
