import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tentastic Melderslo 2027",
  description:
    "Na een geslaagde editie in 2026 komt Tentastic Melderslo terug op vrijdag 18 juni 2027 — een avond vol muziek, gezelligheid en feest in de tent bij Melderslo.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Tentastic",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7931e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
