'use client';

import { useState } from 'react';
import { Locale, getTranslation } from '@/lib/locales';

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Simulate async submission — replace with real API call if needed
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitting(false);
      setSubmitted(true);
      // Optional: Reset after a delay
      setTimeout(() => {
        setFormState({ name: '', company: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setSubmitting(false);
      console.error('Form submission error:', error);
    }
  };

  return (
    <div
      className="rounded-xl border p-8 md:p-10 shadow-premium-md"
      style={{ background: '#FFFFFF', borderColor: '#EDE7D8' }}
    >
      <h2
        className="font-serif font-semibold mb-2"
        style={{ color: '#0B1626', fontSize: '1.5rem', letterSpacing: '-0.01em' }}
      >
        {t('contact.formTitle')}
      </h2>
      <div className="h-px w-8 mb-4" style={{ background: '#C9A961', opacity: 0.6 }} aria-hidden="true" />
      <p className="mb-8" style={{ color: '#868E96', fontSize: '0.9375rem', lineHeight: '1.7' }}>
        {t('contact.formSubtitle')}
      </p>

      {submitted ? (
        <div
          className="rounded-lg p-8 text-center border"
          style={{ background: '#FAF8F3', borderColor: '#EDE7D8' }}
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
            style={{ background: 'rgba(201,169,97,0.12)' }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
              style={{ color: '#C9A961' }}
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p
            className="font-serif font-semibold mb-2"
            style={{ color: '#0B1626', fontSize: '1.125rem' }}
          >
            {t('contact.formSuccess')}
          </p>
          <p style={{ color: '#868E96', fontSize: '0.8125rem' }}>
            {isZh ? '我们会尽快审阅您的信息。' : 'We will review your information shortly.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#495057' }}
              >
                {t('contact.formName')}
                <span className="ml-1" style={{ color: '#C9A961' }} aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full rounded border px-4 py-3 text-sm outline-none transition-all duration-250 focus:ring-2"
                style={{
                  borderColor: '#DEE2E6',
                  background: '#FDFCF9',
                  color: '#212529',
                  '--tw-ring-color': 'rgba(201,169,97,0.4)',
                } as React.CSSProperties}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A961')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#DEE2E6')}
              />
            </div>
            <div>
              <label
                htmlFor="contact-company"
                className="block text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#495057' }}
              >
                {t('contact.formCompany')}
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={formState.company}
                onChange={handleChange}
                className="w-full rounded border px-4 py-3 text-sm outline-none transition-all duration-250"
                style={{
                  borderColor: '#DEE2E6',
                  background: '#FDFCF9',
                  color: '#212529',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A961')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#DEE2E6')}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: '#495057' }}
            >
              {t('contact.formEmail')}
              <span className="ml-1" style={{ color: '#C9A961' }} aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full rounded border px-4 py-3 text-sm outline-none transition-all duration-250"
              style={{
                borderColor: '#DEE2E6',
                background: '#FDFCF9',
                color: '#212529',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A961')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DEE2E6')}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: '#495057' }}
            >
              {t('contact.formMessage')}
              <span className="ml-1" style={{ color: '#C9A961' }} aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              value={formState.message}
              onChange={handleChange}
              className="w-full rounded border px-4 py-3 text-sm outline-none transition-all duration-250 resize-none"
              style={{
                borderColor: '#DEE2E6',
                background: '#FDFCF9',
                color: '#212529',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A961')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#DEE2E6')}
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2.5 font-semibold rounded px-7 py-3 text-sm transition-all duration-250 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: submitting
                  ? '#B8944A'
                  : 'linear-gradient(135deg, #C9A961 0%, #B8944A 100%)',
                color: '#060D1A',
                boxShadow: submitting ? 'none' : '0 2px 8px rgba(201,169,97,0.25)',
              }}
            >
              {submitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  {isZh ? '发送中…' : 'Sending…'}
                </>
              ) : (
                <>
                  {t('contact.formSubmit')}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-xs" style={{ color: '#ADB5BD' }}>
              {t('contact.formNote')}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
