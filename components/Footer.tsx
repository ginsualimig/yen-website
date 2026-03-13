import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = (key: string) => getTranslation(locale, key);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-yen-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Yen<span className="text-yen-gold">.</span>
            </div>
            <p className="text-gray-300 text-sm">
              {t('hero.description')}
            </p>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="font-semibold text-yen-gold mb-4">{t('footer.office')}</h4>
            <p className="text-gray-300 text-sm whitespace-pre-line mb-4">
              {t('footer.address')}
            </p>
            <p className="text-gray-300 text-sm">
              <span className="block">{t('footer.email')}</span>
              <span className="block">{t('footer.phone')}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-yen-gold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-yen-gold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/sitemap`}
                  className="text-gray-300 hover:text-yen-gold transition-colors text-sm"
                >
                  {t('footer.sitemap')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-300 text-sm text-center">
            {t('footer.copyright')} | {year}
          </p>
        </div>
      </div>

      {/* Analytics placeholders */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics placeholder
            // window.dataLayer = window.dataLayer || [];
            // function gtag(){dataLayer.push(arguments);}
            // gtag('js', new Date());
            // gtag('config', 'GA_MEASUREMENT_ID');

            // Baidu Analytics placeholder
            // var _hmt = _hmt || [];
            // (function() {
            //   var hm = document.createElement("script");
            //   hm.src = "https://hm.baidu.com/hm.js?BAIDU_TRACK_ID";
            //   var s = document.getElementsByTagName("script")[0];
            //   s.parentNode.insertBefore(hm, s);
            // })();
          `,
        }}
      />
    </footer>
  );
}
