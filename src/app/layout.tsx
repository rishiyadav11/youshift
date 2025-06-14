import "styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "trpc/react";

export const metadata: Metadata = {
  title: "YouShift Reimagined | Smarter Hospital Scheduling",
  description:
    "YouShift Reimagined is a modern, full-stack hospital shift scheduling platform inspired by YouShift (YC W25). Built with React, tRPC, Drizzle ORM, and React Native.",
  keywords: [
    "YouShift",
    "hospital scheduling",
    "shift management",
    "healthcare SaaS",
    "Founding Engineer project",
    "YouShift clone",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "YouShift Reimagined | Smarter Hospital Scheduling",
    description:
      "A reimagined scheduling platform inspired by YouShift (YC W25), built to simplify healthcare staff coordination.",
    url: "https://yourdomain.com", // replace with actual domain
    siteName: "YouShift Reimagined",
    images: [
      {
        url: "https://youshift.vercel.app/favicon.ico", // replace with actual og image
        width: 1200,
        height: 630,
        alt: "YouShift Reimagined - Hospital Scheduling SaaS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouShift Reimagined",
    description:
      "Smarter hospital scheduling inspired by YouShift. Built with modern full-stack tools.",
    creator: "@yourhandle", // replace with your Twitter handle
    images: ["https://youshift.vercel.app/favicon.ico"],
  },
};


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
