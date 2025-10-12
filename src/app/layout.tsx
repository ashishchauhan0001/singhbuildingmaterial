import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Singh Building Material",
  description: "Welcome to Singh Building Material, your trusted partner for top-quality construction supplies. We provide a wide range of building materials to ensure strength, durability, and excellence in every project. From cement to stone, we have everything you need to build your dream home or commercial space..",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
