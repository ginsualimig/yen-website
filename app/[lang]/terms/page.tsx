import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface TermsPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const title = locale === 'en' ? 'Terms of Service' : '服务条款';
  
  return {
    title: `${title} | Yen Investment Consulting`,
    robots: { index: false },
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isEn = locale === 'en';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-yen-navy mb-8">
          {isEn ? 'Terms of Service' : '服务条款'}
        </h1>

        <div className="prose prose-lg max-w-none text-yen-gray-dark space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Agreement to Terms' : '同意条款'}
            </h2>
            <p>
              {isEn
                ? 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
                : '通过访问和使用本网站，您接受并同意受本协议条款的约束。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Use License' : '使用许可'}
            </h2>
            <p>
              {isEn
                ? 'Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
                : '允许您临时下载我们网站上的一份材料副本，仅供个人、非商业目的查看。这是许可证的授予，不是所有权的转让。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Disclaimer' : '免责声明'}
            </h2>
            <p>
              {isEn
                ? 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
                : '我们网站上的材料是"按原样"提供的。我们不作任何明示或暗示的保证，并特此放弃和否定所有其他保证，包括但不限于对适销性、特定用途适用性或不侵犯知识产权的暗示保证。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Limitations' : '限制'}
            </h2>
            <p>
              {isEn
                ? 'In no event shall Yen Investment Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.'
                : '在任何情况下，俣投资顾问或其供应商都不对因使用或无法使用我们网站上的材料而产生的任何损害（包括但不限于数据或利润损失或业务中断）负责。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Accuracy of Materials' : '材料的准确性'}
            </h2>
            <p>
              {isEn
                ? 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.'
                : '我们网站上出现的材料可能包含技术、排版或摄影错误。我们不保证我们网站上的任何材料都是准确、完整或最新的。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Links' : '链接'}
            </h2>
            <p>
              {isEn
                ? 'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user\'s own risk.'
                : '我们尚未审查与我们网站相关的所有网站，对任何相关网站的内容不负责。包含任何链接并不意味着我们对该网站的认可。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Modifications' : '修改'}
            </h2>
            <p>
              {isEn
                ? 'We may revise these Terms of Service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.'
                : '我们可能随时修订我们网站的这些服务条款，无需通知。通过使用本网站，您同意受当时生效的这些服务条款的约束。'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yen-navy mt-8 mb-4">
              {isEn ? 'Governing Law' : '管辖法律'}
            </h2>
            <p>
              {isEn
                ? 'These conditions and terms are governed by and construed in accordance with the laws of Guangzhou, China, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
                : '这些条件和条款受中国广州法律管辖并根据其解释，您不可撤销地同意该地点法院的专属管辖权。'}
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
