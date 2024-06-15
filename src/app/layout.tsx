import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import { YandexMetrika } from '@/components/Metrika/YandexMetrika';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LeMaxx - Натяжные потолки Сатка и область, заказать, цены.',
  description:
    'Профессиональная установка натяжных потолков под ключ, в Сатке. Цены и стоимость монтажа натяжных потолков. Отзывы и фото натяжных потолков. Купить, вызвать, заказать монтаж натяжных потолков.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={montserrat.className}>
        <Suspense>
          <YandexMetrika />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
