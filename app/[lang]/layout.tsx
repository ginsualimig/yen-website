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
  params: {
    lang: Locale;
  };
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  const locale = params.lang as Locale;
  const isZh = locale === 'zh';

  return {
    metadataBase: new URL('https://yen-consulting.vercel.app'),
    languages: {
      en: 'https://yen-consulting.vercel.app/en',
      zh: 'https://yen-consulting.vercel.app/zh',
    },
    alternates: {
      canonical: `https://yen-consulting.vercel.app/${locale}`,
      languages: {
        en: 'https://yen-consulting.vercel.app/en',
        'zh-Hans': 'https://yen-consulting.vercel.app/zh',
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = params.lang as Locale;
  const htmlLang = locale === 'zh' ? 'zh-CN' : 'en';

  return (
    <html lang={htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-yen-gray-bg text-yen-gray-dark">
        <Header locale={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
