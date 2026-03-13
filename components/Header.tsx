'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, getTranslation } from '@/lib/locales';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const t = (key: string) => getTranslation(locale, key);

  const otherLocale = locale === 'en' ? 'zh' : 'en';
  const otherLocalePath = pathname.replace(`/${locale}/`, `/${otherLocale}/`);

  const navItems = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b-2 border-yen-gold border-opacity-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <div className="text-2xl font-bold text-yen-navy">
              Yen<span className="text-yen-gold">.</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'text-yen-gold border-b-2 border-yen-gold'
                    : 'text-yen-gray-dark hover:text-yen-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle and CTA */}
          <div className="flex items-center space-x-4">
            <Link
              href={otherLocalePath}
              className="text-sm text-yen-gray-dark hover:text-yen-gold transition-colors font-medium"
              title={`Switch to ${otherLocale === 'en' ? 'English' : '中文'}`}
            >
              {t('language-toggle')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-block px-4 py-2 bg-yen-gold text-yen-navy rounded-md text-sm font-semibold hover:bg-yen-gold-light transition-colors"
            >
              {t('contact.title')}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'bg-yen-gold text-yen-navy'
                    : 'text-yen-gray-dark hover:bg-yen-gold-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
