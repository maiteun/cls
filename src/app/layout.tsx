import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLAUDE STUDY — AI를 제대로 쓰는 능력, 같이 만듭니다",
  description:
    "클로드(Claude)로 바이브코딩, MCP·자동화, 디자인까지 함께 배우는 스터디 그룹. 지금 지원하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className="min-h-screen font-body text-ink antialiased pb-16 sm:pb-14">
        {children}
      </body>
    </html>
  );
}
