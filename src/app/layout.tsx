"use client";

import FullPageWrapper from "@/app/fullpage/page";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
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
        <FullPageWrapper />
        <div ref={nextSectionRef}>{children}</div>{" "}
        {/* ✅ children이 올바르게 포함되도록 변경 */}
        <Footer nextSectionRef={nextSectionRef} />
      </body>
    </html>
  );
}
