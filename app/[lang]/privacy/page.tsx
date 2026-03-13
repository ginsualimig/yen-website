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
    title: `${title} | 广州岩氏投资咨询有限公司`,
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
              {isEn ? 'Introduction' : '引言'}
            </h2>
            <p>
              {isEn
                ? 'At 广州岩氏投资咨询有限公司 (Yenturi Investment Consulting), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.'
                : '广州岩氏投资咨询有限公司（Yenturi Investment Consulting）致力于保护您的个人隐私。本隐私政策说明我们在提供顾问服务及维护专业关系过程中，如何收集、使用、存储及保护您的相关信息。请您在使用本网站或与我们建立业务联系前仔细阅读本政策。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Information We Collect' : '我们收集的信息'}
            </h2>
            <p>
              {isEn
                ? 'We may collect information voluntarily provided during the course of our advisory engagements and professional relationships, including name and company details.'
                : '在顾问服务委托及专业关系建立过程中，我们可能收集您自愿提供的信息，包括但不限于：姓名、所在公司及职务信息、通讯联系方式，以及与具体顾问事项相关的背景资料。我们仅收集与服务目的直接相关的必要信息。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'How We Use Your Information' : '信息的使用方式'}
            </h2>
            <p>
              {isEn
                ? 'We use information to deliver advisory services, maintain professional relationships, and fulfil our obligations to clients.'
                : '我们将所收集的信息用于以下目的：提供约定的顾问服务、维护与客户的专业合作关系、履行对客户的合同义务，以及在法律法规要求的情况下配合相关监管要求。我们不会将您的信息用于上述目的以外的任何用途，亦不会在未经您同意的情况下将其出售或转让给第三方。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Data Security' : '数据安全'}
            </h2>
            <p>
              {isEn
                ? 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, and destruction.'
                : '我们采取与业务性质相适应的技术与管理安全措施，防止您的个人信息遭受未经授权的访问、篡改、泄露或销毁。所有涉及客户信息的内部处理均遵循严格的保密规程，访问权限仅限于有业务需要的相关人员。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Enquiries' : '联系与咨询'}
            </h2>
            <p>
              {isEn
                ? 'If you have questions about this Privacy Policy, please reach out through your existing relationship manager or referral contact.'
                : '如您对本隐私政策有任何疑问，或希望行使查阅、更正或删除个人信息的权利，请通过您现有的关系经理或介绍人与我们联系。我们将在合理期限内予以回复和处理。'}
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-yen-gray-bg rounded-lg border-l-4 border-yen-gold">
          <p className="text-sm text-yen-gray-dark">
            {isEn
              ? 'Last updated: March 2026'
              : '最后更新：2026年3月'}
          </p>
        </div>
      </div>
    </section>
  );
}
