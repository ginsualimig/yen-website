import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yenturi Investment Consulting | APAC Financial Advisory',
  description: 'Leading investment consulting and financial advisory services across Asia-Pacific region',
  metadataBase: new URL('https://yenturi.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yenturi.com',
    siteName: 'Yenturi Investment Consulting',
    title: 'Yenturi Investment Consulting | APAC Financial Advisory',
    description: 'Leading investment consulting and financial advisory services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A1428" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
