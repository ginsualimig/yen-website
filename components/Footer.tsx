import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = (key: string) => getTranslation(locale, key);
  const year = new Date().getFullYear();

  const navLinks = [
    { href: `/${locale}`,           label: t('nav.home') },
    { href: `/${locale}/about`,     label: t('nav.about') },
    { href: `/${locale}/services`,  label: t('nav.services') },
    { href: `/${locale}/contact`,   label: t('nav.contact') },
  ];

  const serviceLinks = [
    { href: `/${locale}/services/mna`,                 label: t('services.mna.title') },
    { href: `/${locale}/services/business-improvement`,label: t('services.business-improvement.title') },
    { href: `/${locale}/services/rollup-strategy`,     label: t('services.rollup-strategy.title') },
    { href: `/${locale}/services/direct-investment`,   label: t('services.direct-investment.title') },
    { href: `/${locale}/services/business-management`, label: t('services.business-management.title') },
    { href: `/${locale}/services/research-reports`,    label: t('services.research-reports.title') },
  ];

  return (
    <footer
      className="relative bg-navy-900 text-cream-200 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 60%, #0F1F38 100%)' }}
    >
      {/* Subtle top border accent */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.4) 30%, rgba(201,169,97,0.6) 50%, rgba(201,169,97,0.4) 70%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Upper Footer ─────────────────────────────────── */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 group mb-6 block" aria-label="Yen Investment Consulting">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-gold-500 flex-shrink-0">
                <span className="text-navy-900 font-serif font-bold text-xl leading-none select-none">Y</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-semibold text-cream-100 tracking-tight" style={{ fontSize: '1.0625rem' }}>Yen</span>
                <span className="text-gold-500 font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {locale === 'zh' ? '投资顾问' : 'Investment Consulting'}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-[260px]">
              {t('hero.description')}
            </p>

            {/* Address */}
            <address className="not-italic">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3">{t('footer.office')}</p>
              <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">
                {t('footer.address')}
              </p>
            </address>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              {locale === 'zh' ? '联系方式' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-xs text-slate-500 mb-0.5">{t('contact.email')}</p>
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="text-sm text-slate-300 hover:text-gold-400 transition-colors duration-250 font-medium"
                >
                  {t('footer.email')}
                </a>
              </li>
              <li>
                <p className="text-xs text-slate-500 mb-0.5">{t('contact.phone')}</p>
                <a
                  href={`tel:${t('footer.phone')}`}
                  className="text-sm text-slate-300 hover:text-gold-400 transition-colors duration-250 font-medium"
                >
                  {t('footer.phone')}
                </a>
              </li>
              <li>
                <p className="text-xs text-slate-500 mb-0.5">{locale === 'zh' ? '工作时间' : 'Hours'}</p>
                <p className="text-sm text-slate-400">
                  {locale === 'zh' ? '周一至周五 09:00–18:00 (GMT+8)' : 'Mon–Fri 09:00–18:00 GMT+8'}
                </p>
              </li>
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cream-100 transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cream-100 transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Lower Footer ─────────────────────────────────── */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p>{t('footer.copyright').replace('2024', String(year))}</p>

          <div className="flex items-center gap-5">
            <Link href={`/${locale}/privacy`} className="hover:text-slate-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <Link href={`/${locale}/terms`} className="hover:text-slate-400 transition-colors">
              {t('footer.terms')}
            </Link>
            <span className="text-slate-700" aria-hidden="true">·</span>
            {/* Language switch */}
            <Link
              href={locale === 'zh' ? `/en` : `/zh`}
              className="hover:text-slate-400 transition-colors"
            >
              {locale === 'zh' ? 'English' : '中文'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
