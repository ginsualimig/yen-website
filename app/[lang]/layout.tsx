import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, locales } from '@/lib/locales';

export function generateStaticParams() {
  return locales.map((locale) => ({
    lang: locale,
  }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;

  return {
    metadataBase: new URL('https://yen-website.vercel.app'),
    alternates: {
      canonical: `https://yen-website.vercel.app/${locale}`,
      languages: {
        en: 'https://yen-website.vercel.app/en',
        'zh-Hans': 'https://yen-website.vercel.app/zh',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const htmlLang = locale === 'zh' ? 'zh-CN' : 'en';

  return (
    <html lang={htmlLang} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="flex flex-col min-h-screen antialiased"
        style={{ backgroundColor: '#FDFCF9', color: '#212529' }}
      >
        <Header locale={locale} />
        <main className="flex-grow" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
