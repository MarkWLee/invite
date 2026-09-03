import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '安安一周岁生日宴',
  description: '嗨，我是安安！9月25日来陪我吹蜡烛、吃蛋糕吧。',
  openGraph: {
    title: '安安一周岁生日宴',
    description: '9月25日来陪我吹蜡烛、吃蛋糕吧！',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '安安一周岁生日宴，2026年9月25日11:30',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '安安一周岁生日宴',
    description: '9月25日来陪我吹蜡烛、吃蛋糕吧！',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
