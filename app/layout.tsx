import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/Header";
import { ThemeProvider } from "./features/theme/theme-provider";
import { Suspense } from "react";
import Footer from "./components/layout/footer/Footer";
import ReactQueryProvider from "./providers/ReactQueryProvider";

// فقط فونت فارسی
const vazirmatn = Vazirmatn({
  subsets: ["arabic"], // برای فارسی
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "زرین‌پال | ارائه دهنده خدمات درگاه پرداخت اینترنتی",
  description: "زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی",
  generator: "Mohamadhosein safaryan"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={` ${vazirmatn.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
