import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeQuest | Competitive Programming Platform",
  description: "CodeQuest is your gateway to competitive programming, challenges, and learning resources.",
  keywords: ["CodeQuest", "competitive programming", "coding", "challenges", "IEEE"],
  themeColor: "#0A192F",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    title: "CodeQuest | Competitive Programming Platform",
    description: "CodeQuest is your gateway to competitive programming, challenges, and learning resources.",
    url: "https://codequest.ieee.org/",
    siteName: "CodeQuest",
    images: [
      {
        url: "/public/globe.svg",
        width: 1200,
        height: 630,
        alt: "CodeQuest Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
