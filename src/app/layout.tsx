import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });
const canonicalUrl = `https://lemaxx.ru`;

export const metadata: Metadata = {
  title: 'LeMaxx - Натяжные потолки Сатка и область, заказать, цены.',
  description:
    'Профессиональная установка натяжных потолков под ключ, в Сатке. Цены и стоимость монтажа натяжных потолков. Отзывы и фото натяжных потолков. Купить, вызвать, заказать монтаж натяжных потолков.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel='canonical' key='canonical' href={canonicalUrl} />
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
