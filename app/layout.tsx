import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syntax Lab | Tel Aviv University",
  description:
    "A Next.js homepage for a syntax lab focused on sentence structure, comprehension, and experimental linguistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
