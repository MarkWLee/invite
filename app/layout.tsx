import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteUrl } from '@/lib/site-path';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  title: '安安一周岁生日宴',
  description: '嗨，我是安安！9月25日来陪我吹蜡烛、吃蛋糕吧。',
  openGraph: {
    title: '安安一周岁生日宴',
    description: '9月25日上午11点，来陪我吹蜡烛、吃蛋糕吧！',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: new URL('og.png', siteUrl).href,
        width: 1200,
        height: 630,
        alt: '安安一周岁生日宴，2026年9月25日上午11点',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '安安一周岁生日宴',
    description: '9月25日上午11点，来陪我吹蜡烛、吃蛋糕吧！',
    images: [new URL('og.png', siteUrl).href],
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
