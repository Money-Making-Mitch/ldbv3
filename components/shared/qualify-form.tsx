'use client';

import { useState, useId } from 'react';

const INDUSTRIES = [
  'Financial Services', 'Healthcare', 'Real Estate', 'Legal / Compliance',
  'Government / Public Sector', 'Retail / E-commerce', 'Insurance',
  'Technology / SaaS', 'Energy / Utilities', 'Other',
] as const;

const DATA_TYPES = [
  'Transaction Records', 'Property Records', 'Court / Legal Filings',
  'Business License Data', 'Permit & Inspection Records', 'Regulatory Filings',
  'Geo / Location Data', 'Healthcare Claims (de-identified)', 'Other',
] as const;

const VOLUME_RANGES = [
  'Under 100K', '100K – 1M', '1M – 10M', '10M – 100M', 'Over 100M',
] as const;

const YEAR_RANGES = [
  'Less than 1 year', '1 – 3 years', '3 – 5 years', '5 – 10 years', 'Over 10 years',
] as const;

interface FormState {
  name: string;
  company: string;
  email: string;
  industry: string;
  dataType: string;
  volumeRecords: string;
  yearsAvailable: string;
  notes: string;
  consent: boolean;
}

const INITIAL: FormState = {
  name: '', company: '', email: '',
  industry: '', dataType: '', volumeRecords: '', yearsAvailable: '',
  notes: '', consent: false,
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function QualifyForm() {
  const id = useId();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function set(field: keyof FormState, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const isValid =
    form.name.trim().length > 0 &&
    form.company.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.industry !== '' &&
    form.dataType !== '' &&
    form.volumeRecords !== '' &&
    form.yearsAvailable !== '' &&
    form.consent;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          industry: form.industry,
          dataType: form.dataType,
          volumeRecords: form.volumeRecords,
          yearsAvailable: form.yearsAvailable,
          notes: form.notes.trim(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm(INITIAL);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again or email contact@licensedatabureau.com directly.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="qf-success" role="status" aria-live="polite">
        <div className="qf-success-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#1a9b8a" strokeWidth="1.5"/>
            <path d="M10 16.5L14 20.5L22 12" stroke="#1a9b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="qf-success-heading">Request received.</h3>
        <p className="qf-success-body">
          We'll review your corpus details and reach out within 1–2 business days.
          Check your inbox — a confirmation email is on its way.
        </p>
        <p className="qf-success-note">
          Have a question in the meantime?{' '}
          <a href="mailto:contact@licensedatabureau.com">contact@licensedatabureau.com</a>
        </p>
      </div>
    );
  }

  return (
    <form className="qf-form" onSubmit={handleSubmit} noValidate aria-label="Data corpus qualification form">
      <div className="qf-row qf-row-2">
        <div className="qf-field">
          <label className="qf-label" htmlFor={`${id}-name`}>Full Name <span aria-hidden="true">*</span></label>
          <input
            id={`${id}-name`}
            className="qf-input"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div className="qf-field">
          <label className="qf-label" htmlFor={`${id}-company`}>Company <span aria-hidden="true">*</span></label>
          <input
            id={`${id}-company`}
            className="qf-input"
            type="text"
            autoComplete="organization"
            required
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div className="qf-field">
        <label className="qf-label" htmlFor={`${id}-email`}>Business Email <span aria-hidden="true">*</span></label>
        <input
          id={`${id}-email`}
          className="qf-input"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          placeholder="jane@company.com"
        />
      </div>

      <div className="qf-row qf-row-2">
        <div className="qf-field">
          <label className="qf-label" htmlFor={`${id}-industry`}>Industry <span aria-hidden="true">*</span></label>
          <select
            id={`${id}-industry`}
            className="qf-select"
            required
            value={form.industry}
            onChange={(e) => set('industry', e.target.value)}
          >
            <option value="">Select industry</option>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div className="qf-field">
          <label className="qf-label" htmlFor={`${id}-dtype`}>Data Type <span aria-hidden="true">*</span></label>
          <select
            id={`${id}-dtype`}
            className="qf-select"
            required
            value={form.dataType}
            onChange={(e) => set('dataType', e.target.value)}
          >
            <option value="">Select data type</option>
            {DATA_TYPES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div className="qf-row qf-row-2">
        <div className="qf-field">
          <label className="qf-label" htmlFor={`${id}-volume`}>Estimated Record Volume <span aria-hidden="true">*</span></label>
          <select
            id={`${id}-volume`}
            className="qf-select"
            required
            value={form.volumeRecords}
            onChange={(e) => set('volumeRecords', e.target.value)}
          >
            <option value="">Select range</option>
            {VOLUME_RANGES.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div className="qf-field">
          <label className="qf-label" htmlFor={`${id}-years`}>Years of Historical Data <span aria-hidden="true">*</span></label>
          <select
            id={`${id}-years`}
            className="qf-select"
            required
            value={form.yearsAvailable}
            onChange={(e) => set('yearsAvailable', e.target.value)}
          >
            <option value="">Select range</option>
            {YEAR_RANGES.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      <div className="qf-field">
        <label className="qf-label" htmlFor={`${id}-notes`}>Additional Notes <span className="qf-optional">(optional)</span></label>
        <textarea
          id={`${id}-notes`}
          className="qf-textarea"
          rows={3}
          value={form.notes}
          onChange={(e) => set('notes', e.target.value)}
          placeholder="Any context on data format, refresh frequency, exclusivity preferences, etc."
        />
      </div>

      {/* Disclosure */}
      <div className="qf-disclosure">
        <strong className="qf-disclosure-title">Important Disclosures</strong>
        <p className="qf-disclosure-text">
          License Data Bureau is a data licensing facilitator. We do not purchase, store, or broker personal information.
          Valuation estimates are preliminary indicators only — not appraisals, not guarantees of sale, and not financial advice.
          Actual licensing outcomes depend on buyer interest, corpus quality, and negotiation.{' '}
          You retain full ownership and control of your data at all times.
          By submitting, you acknowledge our{' '}
          <a href="/legal/terms-of-service" target="_blank" rel="noopener">Terms of Service</a>,{' '}
          <a href="/legal/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>, and{' '}
          <a href="/legal/disclaimer" target="_blank" rel="noopener">Disclaimer</a>.
        </p>
      </div>

      {/* Consent checkbox */}
      <div className="qf-consent">
        <label className="qf-consent-label">
          <input
            type="checkbox"
            className="qf-checkbox"
            checked={form.consent}
            onChange={(e) => set('consent', e.target.checked)}
            required
            aria-required="true"
          />
          <span>
            I confirm I have the legal authority to license this data and I agree to the disclosures above.
            I understand this is not a sales contract.{' '}
            <strong>No data is collected or stored as part of this inquiry.</strong>
          </span>
        </label>
      </div>

      {status === 'error' && (
        <div className="qf-error" role="alert">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#dc2626" strokeWidth="1.5"/>
            <path d="M8 4.5V8.5M8 10.5V11.5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className={`qf-submit${status === 'submitting' ? ' qf-submit--loading' : ''}`}
        disabled={!isValid || status === 'submitting'}
        aria-disabled={!isValid || status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="qf-spinner" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          'Submit Qualification Request →'
        )}
      </button>

      <p className="qf-footer-note">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M6 0.5L0.5 2.5V7C0.5 9.8 2.9 11.5 6 12C9.1 11.5 11.5 9.8 11.5 7V2.5L6 0.5Z" stroke="#8aada8" strokeWidth="0.8"/>
          <path d="M3.5 6L5 7.5L8.5 4" stroke="#8aada8" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        Zero-retention intake. Your information is transmitted securely and never stored without an executed NDA.
      </p>
    </form>
  );
}
