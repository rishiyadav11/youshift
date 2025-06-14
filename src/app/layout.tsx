import "styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "../components/Navbar";
import { TRPCReactProvider } from "trpc/react";
import Footer from "../components/Footer";
import Script from "next/script";

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
    url: "http://youshift.vercel.app/",
    siteName: "YouShift Reimagined",
    images: [
      {
        url: "https://youshift.vercel.app/favicon.ico",
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
    creator: "@yourhandle",
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
      <head>
        {/* Google Translate script */}
        
      </head>
      <body className="min-h-screen bg-gradient-to-br from-[#3896e7] to-[#a5E5FB] text-white">
        <div className="min-h-screen bg-white/10 backdrop-blur-xl">
        
          {/* Place this where you want the language toggle to show */}
          <Navbar />
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Footer />
          <Script
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: ',es,hi,fr,de,zh-CN,ar,pt,it,ja,ru',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
        </div>
      </body>
    </html>
  );
}
