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

const inter = Inter({ subsets: ["latin"] });

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
    <html class="dark" lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <Providers>
            <div className="flex flex-col h-screen">
              <div className="sticky top-0">
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <Langages locale={locale} />
                  <ThemeSwitch />
                </div>
              </div>

              <div className="flex-1 flex justify-center items-center">
                {children}
              </div>
              <div className="sticky bottom-0">
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <Footer />
                </div>
              </div>
              <Copyright />
            </div>
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
