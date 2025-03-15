"use client";

import "./globals.css";
import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";
import { useRef } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextSectionRef = useRef<HTMLDivElement>(null!);

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer nextSectionRef={nextSectionRef} />
      </body>
    </html>
  );
}
