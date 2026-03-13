'use client';

import { useState } from 'react';
import { Locale, getTranslation } from '@/lib/locales';

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = (key: string) => getTranslation(locale, key);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        country: formData.get('country'),
        service: formData.get('service'),
        message: formData.get('message'),
      };

      // Here you would send the email
      // For now, we'll just simulate it
      console.log('Form submission:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      e.currentTarget.reset();

      // Reset message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(t('contact.form.error'));
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    { value: 'mna', label: t('services.mna.title') },
    { value: 'business-improvement', label: t('services.business-improvement.title') },
    { value: 'rollup-strategy', label: t('services.rollup-strategy.title') },
    { value: 'direct-investment', label: t('services.direct-investment.title') },
    { value: 'business-management', label: t('services.business-management.title') },
    { value: 'research-reports', label: t('services.research-reports.title') },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors"
          placeholder={t('contact.form.name')}
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.company')} *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors"
          placeholder={t('contact.form.company')}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.email')} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors"
          placeholder={t('contact.form.email')}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.phone')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors"
          placeholder={t('contact.form.phone')}
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.country')}
        </label>
        <input
          type="text"
          id="country"
          name="country"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors"
          placeholder={t('contact.form.country')}
        />
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.service')} *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors bg-white"
        >
          <option value="">{t('contact.form.service')}</option>
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-yen-navy mb-2">
          {t('contact.form.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yen-gold focus:outline-none transition-colors resize-none"
          placeholder={t('contact.form.message')}
        />
      </div>

      {/* Status Messages */}
      {submitted && (
        <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
          {t('contact.form.success')}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-yen-gold text-yen-navy rounded-lg font-semibold hover:bg-yen-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : t('contact.form.submit')}
      </button>

      <p className="text-sm text-gray-500 text-center">
        * {locale === 'en' ? 'Required fields' : '必填项'}
      </p>
    </form>
  );
}
