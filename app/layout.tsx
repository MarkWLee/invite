import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: '李施安一周岁生日宴',
  description: '诚邀你参加李施安的一周岁生日宴。2026年9月25日，相约上海武康路。',
  openGraph: {
    title: '李施安一周岁生日宴',
    description: '2026年9月25日 11:30，相约5Senses武康花园餐厅。',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '李施安一周岁生日宴，2026年9月25日11:30',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '李施安一周岁生日宴',
    description: '2026年9月25日 11:30，相约5Senses武康花园餐厅。',
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
