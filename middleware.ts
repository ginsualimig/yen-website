import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'zh'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  let locale = defaultLocale;

  if (acceptLanguage.includes('zh')) {
    locale = 'zh';
  }

  // Redirect to the locale-prefixed URL
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, etc.)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
