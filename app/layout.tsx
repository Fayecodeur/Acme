import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/font";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Exercie app Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
