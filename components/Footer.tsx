import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = (key: string) => getTranslation(locale, key);
  const year = new Date().getFullYear();
  const isZh = locale === 'zh';

  const serviceLinks = [
    { href: `/${locale}/services/mna`,                 label: t('services.mna.title') },
    { href: `/${locale}/services/business-improvement`,label: t('services.business-improvement.title') },
    { href: `/${locale}/services/rollup-strategy`,     label: t('services.rollup-strategy.title') },
    { href: `/${locale}/services/direct-investment`,   label: t('services.direct-investment.title') },
    { href: `/${locale}/services/business-management`, label: t('services.business-management.title') },
    { href: `/${locale}/services/research-reports`,    label: t('services.research-reports.title') },
  ];

  const companyLinks = [
    { href: `/${locale}`,           label: t('nav.home') },
    { href: `/${locale}/about`,     label: t('nav.about') },
    { href: `/${locale}/services`,  label: t('nav.services') },
    { href: `/${locale}/contact`,   label: t('nav.contact') },
  ];

  return (
    <footer
      className="relative bg-navy-900 text-cream-200 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 60%, #0F1F38 100%)' }}
    >
      {/* ═══ Top flow accent — subtle Venturi flow pattern ═══ */}
      <div className="relative h-px w-full" aria-hidden="true">
        <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="footer-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#C9A961" stopOpacity="0" />
              <stop offset="20%"  stopColor="#C9A961" stopOpacity="0.3" />
              <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.55" />
              <stop offset="80%"  stopColor="#C9A961" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="footer-flow-b" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#3B6EA8" stopOpacity="0" />
              <stop offset="30%"  stopColor="#3B6EA8" stopOpacity="0.25" />
              <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.40" />
              <stop offset="70%"  stopColor="#3B6EA8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B6EA8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Converging flow lines at footer entry */}
          <path d="M0 30 Q300 25 600 30 Q900 25 1200 30" stroke="url(#footer-flow-grad)" strokeWidth="1.5" />
          <path d="M0 40 Q350 35 600 32 Q850 35 1200 40" stroke="url(#footer-flow-b)" strokeWidth="0.8" opacity="0.7"/>
          <path d="M0 50 Q400 40 600 35 Q800 40 1200 50" stroke="url(#footer-flow-b)" strokeWidth="0.6" opacity="0.5"/>
          {/* Central pressure point accent */}
          <circle cx="600" cy="32" r="2" fill="#C9A961" opacity="0.6"/>
          <circle cx="600" cy="32" r="5" fill="none" stroke="#C9A961" strokeWidth="0.7" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Upper Footer ─────────────────────────────────── */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3 group mb-6 block" aria-label="Yenturi">
              <span className="font-serif font-semibold text-cream-100 tracking-tight" style={{ fontSize: '1.0625rem' }}>Yenturi</span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-[320px]">
              {isZh
                ? '专业的亚太地区投资顾问和并购咨询公司，服务机构投资者和企业客户。'
                : 'Institutional investment consulting and M&A advisory firm serving investors and corporations across the Asia-Pacific region.'}
            </p>

            {/* Address */}
            <address className="not-italic">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3">{t('footer.office')}</p>
              <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed mb-6">
                {t('footer.address')}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-1">
                <span className="font-semibold text-slate-500">{isZh ? '公司名称' : 'Company Name'}:</span> {t('footer.companyNameCn')}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-500">{isZh ? '统一社会信用代码' : 'Registration Number'}:</span> {t('footer.registrationNumber')}
              </p>
            </address>
          </div>

          {/* Company links column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              {isZh ? '公司' : 'Company'}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
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
