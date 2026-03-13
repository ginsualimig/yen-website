'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Locale, getTranslation } from '@/lib/locales';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const t = (key: string) => getTranslation(locale, key);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'zh' : 'en';
  const otherLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navItems = [
    { href: `/${locale}`,          label: t('nav.home') },
    { href: `/${locale}/about`,    label: t('nav.about') },
    { href: `/${locale}/services`, label: t('nav.services') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-350 ease-premium ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-premium border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ───────────────────────────────────────── */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Yenturi – Home"
          >
            <span
              className="font-serif font-semibold text-navy-900 tracking-tight"
              style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em' }}
            >
              Yenturi
            </span>
          </Link>

          {/* ── Desktop Nav ────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link px-4 py-2 rounded-sm text-sm ${isActive(item.href) ? 'active text-navy-900' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop Right ──────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <Link
              href={otherLocalePath}
              className="flex items-center gap-1.5 text-slate-500 hover:text-navy-900 transition-colors duration-250 text-sm font-medium"
              title={`Switch to ${otherLocale === 'en' ? 'English' : '中文'}`}
            >
              <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
              {t('language-toggle')}
            </Link>

            {/* About CTA instead of Contact */}
            <Link href={`/${locale}/about`} className="btn-primary text-sm">
              {t('nav.about')}
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* ── Mobile: Lang + Hamburger ────────────────────── */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href={otherLocalePath}
              className="text-slate-500 hover:text-navy-900 transition-colors text-sm font-medium"
            >
              {t('language-toggle')}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-sm text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-all"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ──────────────────────────────────── */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-navy-900 text-cream-100'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
