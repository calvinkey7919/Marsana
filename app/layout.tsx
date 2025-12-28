import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Marsana Rent A Car | Enterprise Web Platform",
  description: "Marsana Rent A Car - Corporate-focused rental & mobility solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansArabic.variable} antialiased font-sans bg-[#fcfcfc] text-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
