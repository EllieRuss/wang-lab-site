import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { VT323 } from "next/font/google";
import "./globals.css";

const siteFont = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className="h-full antialiased">
      <body className={`${siteFont.className} min-h-full`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
