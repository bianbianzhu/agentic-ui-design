import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// Inter font - primary font for edtech design
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

// Geist fonts - alternative font option
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduFlow - Transform Learning",
  description: "Empowering education through intelligent technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Toggle between 'inter' and 'geist' by changing this variable
  const useFont: "inter" | "geist" = "inter";

  const fontClass = useFont === "inter"
    ? `${inter.variable} font-[family-name:var(--font-inter)]`
    : `${geistSans.variable} font-[family-name:var(--font-geist-sans)]`;

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${fontClass} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
