import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const manrope = Manrope({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Wang Lab",
  description: "Wang Lab website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <body className={`${manrope.className} min-h-full flex flex-col`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}