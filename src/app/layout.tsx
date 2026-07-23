import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
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
    <html lang="ko" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="min-h-screen font-body text-ink antialiased pb-16 sm:pb-14">
        {children}
      </body>
    </html>
  );
}
