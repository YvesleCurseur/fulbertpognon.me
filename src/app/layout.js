import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fulbert Pognon",
  description: "Fulbert Pognon's Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <div className="flex-1 flex justify-center items-center">
            {children}
          </div>
          <div className="sticky bottom-0">
          <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
