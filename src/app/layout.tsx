import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import ReactQueryProvider from '@/providers/react-query-provider';

const BMJUAFont = localFont({ src: '../assets/fonts/GmarketSansMedium.otf' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${BMJUAFont.className} antialiased`}>
        <ReactQueryProvider>
          <Header />
          <main className="mx-auto mt-12 max-w-screen-lg">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
