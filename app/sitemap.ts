import { MetadataRoute } from 'next';

const baseUrl = 'https://yenturi.com';
const locales = ['en', 'zh'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  const pages = ['', 'about', 'services', 'privacy', 'terms'];
  
  locales.forEach((locale) => {
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page ? '/' + page : ''}`,
        lastModified: new Date(),
        changeFrequency: page === 'services' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  // Add service detail pages
  const services = [
    'mna',
    'business-improvement',
    'rollup-strategy',
    'direct-investment',
    'business-management',
    'research-reports',
  ];

  locales.forEach((locale) => {
    services.forEach((service) => {
      routes.push({
        url: `${baseUrl}/${locale}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return routes;
}
