import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: {
    bing: '27D89823A10D605BB460D646E91B0AD3',
  },
  title: "iMile Tracking - Real-time Delivery Status | Track & Trace",
  description: "Track your iMile shipments instantly. Get real-time updates, delivery status, and estimated arrival times for all iMile packages. The most accurate iMile tracker.",
  keywords: "iMile Tracking, iMile Delivery, Track iMile Package, iMile Courier, iMile Status, iMile Logistics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.imiledeliverytracking.com/",
    title: "iMile Tracking - Real-time Delivery Status",
    description: "Track your iMile shipments instantly. Get real-time updates.",
    siteName: "iMile Tracking",
  },
  twitter: {
    card: "summary_large_image",
    title: "iMile Tracking - Real-time Delivery Status",
    description: "Track your iMile shipments instantly. Get real-time updates.",
  },
  alternates: {
    canonical: "https://www.imiledeliverytracking.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-gray-50 text-slate-900 antialiased")}>
        {children}
      </body>
    </html>
  );
}
