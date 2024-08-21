import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bijoy24 Test",
  description: "Bijoy24 Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <AntdRegistry>
        <Navbar/>
        {children}</AntdRegistry></body>
    </html>
  );
}
