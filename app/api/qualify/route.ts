import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { QualifyFormData } from '@/lib/emails/notification';
import { notificationEmailHtml, notificationEmailText } from '@/lib/emails/notification';
import { confirmationEmailHtml, confirmationEmailText } from '@/lib/emails/confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? 'no-reply@licensedatabureau.com';
const NOTIFY = process.env.NOTIFY_EMAIL ?? 'contact@licensedatabureau.com';

const INDUSTRIES = [
  'Financial Services', 'Healthcare', 'Real Estate', 'Legal / Compliance',
  'Government / Public Sector', 'Retail / E-commerce', 'Insurance',
  'Technology / SaaS', 'Energy / Utilities', 'Other',
];
const DATA_TYPES = [
  'Transaction Records', 'Property Records', 'Court / Legal Filings',
  'Business License Data', 'Permit & Inspection Records', 'Regulatory Filings',
  'Geo / Location Data', 'Healthcare Claims (de-identified)', 'Other',
];
const VOLUME_RANGES = [
  'Under 100K', '100K – 1M', '1M – 10M', '10M – 100M', 'Over 100M',
];
const YEAR_RANGES = [
  'Less than 1 year', '1 – 3 years', '3 – 5 years', '5 – 10 years', 'Over 10 years',
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(val: unknown): string {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, 500);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const data: QualifyFormData = {
    name: sanitize(body.name),
    company: sanitize(body.company),
    email: sanitize(body.email),
    industry: sanitize(body.industry),
    dataType: sanitize(body.dataType),
    volumeRecords: sanitize(body.volumeRecords),
    yearsAvailable: sanitize(body.yearsAvailable),
    notes: sanitize(body.notes),
  };

  // Validation
  const errors: string[] = [];
  if (!data.name) errors.push('name is required');
  if (!data.company) errors.push('company is required');
  if (!data.email || !isValidEmail(data.email)) errors.push('valid email is required');
  if (!INDUSTRIES.includes(data.industry)) errors.push('invalid industry');
  if (!DATA_TYPES.includes(data.dataType)) errors.push('invalid dataType');
  if (!VOLUME_RANGES.includes(data.volumeRecords)) errors.push('invalid volumeRecords');
  if (!YEAR_RANGES.includes(data.yearsAvailable)) errors.push('invalid yearsAvailable');

  if (errors.length > 0) {
    return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 422 });
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'short',
  }) + ' CT';

  try {
    // Send both emails in parallel
    const [notifResult, confirmResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: [NOTIFY],
        subject: `[LDB] New Qualification Request — ${data.company} (${data.industry})`,
        html: notificationEmailHtml(data, submittedAt),
        text: notificationEmailText(data, submittedAt),
        replyTo: data.email,
      }),
      resend.emails.send({
        from: FROM,
        to: [data.email],
        subject: 'License Data Bureau — We received your qualification request',
        html: confirmationEmailHtml(data),
        text: confirmationEmailText(data),
      }),
    ]);

    // Log any send failures server-side but still return success to the user
    // (notification failure should not block confirmation and vice versa)
    if (notifResult.status === 'rejected') {
      console.error('[qualify] notification email failed:', notifResult.reason);
    }
    if (confirmResult.status === 'rejected') {
      console.error('[qualify] confirmation email failed:', confirmResult.reason);
    }

    // If the notification email hard-failed (not just confirmation), treat as error
    if (notifResult.status === 'rejected') {
      return NextResponse.json(
        { error: 'Submission failed. Please try again or contact us directly at contact@licensedatabureau.com.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[qualify] unexpected error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please contact contact@licensedatabureau.com directly.' },
      { status: 500 },
    );
  }
}
