/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  headers: async () => [
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/xml',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
