import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yenturi Investment Consulting | APAC Financial Advisory',
  description: 'Leading investment consulting and financial advisory services across Asia-Pacific region',
  metadataBase: new URL('https://yenturi.com'),
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A1428" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
