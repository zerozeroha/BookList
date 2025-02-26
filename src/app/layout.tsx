'use client';

import FullPageWrapper from '@/components/fullpage/page';
import './globals.css';

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FullPageWrapper />
      </body>
    </html>
  );
}
