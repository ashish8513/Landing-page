import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/global';
import CustomCursor from '@/components/CustomCursor';
import StarsCanvas from '@/components/molecules/StarBackground';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ashish Prabhakar',
  description: 'AI & ML Engineer and Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarsCanvas />
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
