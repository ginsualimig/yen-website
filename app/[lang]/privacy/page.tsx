import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface PrivacyPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const title = locale === 'en' ? 'Privacy Policy' : '隐私政策';
  
  return {
    title: `${title} | Yen Investment Consulting`,
    robots: { index: false },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isEn = locale === 'en';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-yen-navy mb-8">
          {isEn ? 'Privacy Policy' : '隐私政策'}
        </h1>

        <div className="prose prose-lg max-w-none text-yen-gray-dark space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Introduction' : '介绍'}
            </h2>
            <p>
              {isEn
                ? 'At Yen Investment Consulting, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.'
                : '在俣投资顾问，我们致力于保护您的隐私。本隐私政策说明我们如何收集、使用和保护您的信息。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Information We Collect' : '我们收集的信息'}
            </h2>
            <p>
              {isEn
                ? 'We collect information you voluntarily provide, such as name, email, phone number, and company details through our contact form and services.'
                : '我们收集您通过联系表格和服务自愿提供的信息，如姓名、电子邮件、电话号码和公司详情。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'How We Use Your Information' : '我们如何使用您的信息'}
            </h2>
            <p>
              {isEn
                ? 'We use the information to respond to inquiries, provide services, and improve our website experience.'
                : '我们使用这些信息来回复询问、提供服务和改进网站体验。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Data Security' : '数据安全'}
            </h2>
            <p>
              {isEn
                ? 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, and destruction.'
                : '我们实施适当的安全措施，保护您的个人信息免受未经授权的访问、更改和销毁。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Contact Us' : '联系我们'}
            </h2>
            <p>
              {isEn
                ? 'If you have questions about this Privacy Policy, please contact us at contact@yen-consulting.com'
                : '如果您对本隐私政策有任何疑问，请与我们联系：contact@yen-consulting.com'}
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-yen-gray-bg rounded-lg border-l-4 border-yen-gold">
          <p className="text-sm text-yen-gray-dark">
            {isEn
              ? 'Last updated: December 2024'
              : '最后更新：2024年12月'}
          </p>
        </div>
      </div>
    </section>
  );
}
