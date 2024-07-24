import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/lib/theme-providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <ThemeProviders>
          {/* <Header /> */}
          {children}
          {/* <Footer/> */}
        </ThemeProviders>
      </body>
    </html>
  );
}
