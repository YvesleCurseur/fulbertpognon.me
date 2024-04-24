import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Langages from "@/components/Langages";
import Copyright from "@/components/Copyright";

// Translation Imports
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";

//Dark mode
import { Providers } from "@/providers";
import ThemeSwitch from "@/components/ThemeSwitch";

import Script from 'next/script'
import * as Swetrix from 'swetrix'

Swetrix.init('vLroEsXscnz0')
Swetrix.trackViews()

export const metadata = {
  title: "Fulbert Pognon",
  description: "Fulbert Pognon's Portfolio",
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  
  const messages = useMessages();

  return (
    <html className="dark" lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZCK2ZQGMP"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2ZCK2ZQGMP');
          `}
        </Script>

        
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <Providers>
            <div className="flex flex-col h-screen">
              <div className="top-0">
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <Langages locale={locale} />
                  <ThemeSwitch />
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                {children}
              </div>

                {/* <div className="sticky bottom-0"> */}
                  <div className="flex items-center justify-center mt-4 space-x-4">
                    <Footer />
                  </div>
                {/* </div> */}
              <Copyright />
            </div>
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
