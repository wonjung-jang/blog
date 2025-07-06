import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "원정 기록",
  description: "나의 개발, 일상 원정 기록",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="break-keep text-gray800">
      <body className="font-sans">
        <Header />
        <main>
          <div className="mt-24 mx-auto min-w-[981px] color-bg-lime700 min-h-[50vh]">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
