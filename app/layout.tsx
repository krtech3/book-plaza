import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Suspense } from "react";
import Header from "./components/Header";
import "./globals.css";
import { NextAuthProvider } from "./lib/next-auth/provider";
import Loading from "./loading";


// import localFont from "next/font/local";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Book Plaza",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <NextAuthProvider>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}

/*
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

*/
