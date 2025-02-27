"use client";

import FullPageWrapper from "@/app/fullpage/page";
import "./globals.css";
import Header from "@/components/ui/header/Header";

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <FullPageWrapper />
      </body>
    </html>
  );
}
