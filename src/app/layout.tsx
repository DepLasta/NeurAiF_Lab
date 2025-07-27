import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/mycomponents/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nasalization = localFont({
  src: [
    {
      path: "../../public/fonts/Nasalization.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nasalization",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeurAiF",
  description: "If Neuroscience Fuses with Artificial Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
        <title>NeurAiF</title>
      </head>
      <body className={`${nasalization.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
