import type { QualifyFormData } from './notification';

export function confirmationEmailHtml(data: QualifyFormData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your request — License Data Bureau</title>
  <style>
    body { margin: 0; padding: 0; background: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1a1a2e; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.12); }
    .header { background: #0a1628; padding: 28px 32px; text-align: center; }
    .header-logo { color: #c9a84c; font-size: 13px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; margin: 0 0 8px; }
    .header-title { color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; line-height: 1.3; }
    .body { padding: 32px; }
    p { margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #374151; }
    .summary-box { background: #f0faf9; border: 1px solid #1a9b8a33; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .summary-box h3 { margin: 0 0 14px; font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #1a9b8a; }
    .summary-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #e5f7f5; font-size: 14px; }
    .summary-row:last-child { border-bottom: none; }
    .summary-key { color: #6b7280; font-weight: 500; }
    .summary-val { color: #0a1628; font-weight: 600; text-align: right; }
    .disclosure-box { background: #fafafa; border-left: 3px solid #d1d5db; padding: 14px 18px; border-radius: 0 6px 6px 0; margin: 24px 0; font-size: 12px; line-height: 1.7; color: #6b7280; }
    .disclosure-box strong { display: block; margin-bottom: 4px; color: #374151; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }
    .next-steps { margin: 24px 0; }
    .next-steps h3 { font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #0a1628; margin: 0 0 12px; }
    .step { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; }
    .step-num { background: #0a1628; color: #c9a84c; font-size: 11px; font-weight: 700; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
    .step-text { font-size: 14px; line-height: 1.5; color: #374151; }
    .footer { background: #f8fafc; padding: 18px 32px; font-size: 11px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; line-height: 1.8; }
    .footer a { color: #1a9b8a; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <p class="header-logo">License Data Bureau</p>
      <h1 class="header-title">We've received your qualification request, ${escHtml(data.name.split(' ')[0])}.</h1>
    </div>
    <div class="body">
      <p>Thank you for submitting your corpus details. A member of our team will review your information and reach out within <strong>1–2 business days</strong> to discuss next steps.</p>

      <div class="summary-box">
        <h3>Your Submission Summary</h3>
        <div class="summary-row">
          <span class="summary-key">Company</span>
          <span class="summary-val">${escHtml(data.company)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-key">Industry</span>
          <span class="summary-val">${escHtml(data.industry)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-key">Data Type</span>
          <span class="summary-val">${escHtml(data.dataType)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-key">Volume</span>
          <span class="summary-val">${escHtml(data.volumeRecords)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-key">Years Available</span>
          <span class="summary-val">${escHtml(data.yearsAvailable)}</span>
        </div>
      </div>

      <div class="next-steps">
        <h3>What Happens Next</h3>
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-text"><strong>Initial Review</strong> — We assess your corpus against current buyer demand and data quality criteria.</div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-text"><strong>Qualification Call</strong> — If your corpus is a fit, we'll schedule a brief call to discuss structure, exclusivity preferences, and pricing guidance.</div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-text"><strong>Buyer Introduction</strong> — Qualified buyers are introduced under mutual NDA. You retain full ownership and control of your data throughout.</div>
        </div>
      </div>

      <div class="disclosure-box">
        <strong>Important Disclosures</strong>
        License Data Bureau is a data licensing facilitator, not a data broker dealing in personal information. We do not purchase, store, or resell your data. Any valuation estimates provided on our website are preliminary indicators only — not appraisals, not guarantees of sale, and not financial advice. Actual licensing outcomes depend on buyer interest, corpus quality, and negotiation. You retain full ownership of your data at all times. License Data Bureau is not affiliated with any government agency.
      </div>

      <p style="font-size:14px; color:#6b7280;">Questions? Reply directly to this email or reach us at <a href="mailto:contact@licensedatabureau.com" style="color:#1a9b8a;">contact@licensedatabureau.com</a>.</p>
    </div>
    <div class="footer">
      License Data Bureau · <a href="https://licensedatabureau.com">licensedatabureau.com</a><br />
      <a href="https://licensedatabureau.com/legal/privacy-policy">Privacy Policy</a> · <a href="https://licensedatabureau.com/legal/terms-of-service">Terms of Service</a> · <a href="https://licensedatabureau.com/legal/disclaimer">Disclaimer</a><br /><br />
      You're receiving this because you submitted a qualification request at licensedatabureau.com.<br />
      This email contains no marketing material and was sent in direct response to your submission.
    </div>
  </div>
</body>
</html>`;
}

export function confirmationEmailText(data: QualifyFormData): string {
  return `License Data Bureau — Qualification Request Received
=====================================================

Hi ${data.name.split(' ')[0]},

We've received your qualification request and will review your corpus details within 1–2 business days.

Your Submission Summary
-----------------------
Company:          ${data.company}
Industry:         ${data.industry}
Data Type:        ${data.dataType}
Volume:           ${data.volumeRecords}
Years Available:  ${data.yearsAvailable}

What Happens Next
-----------------
1. Initial Review — We assess your corpus against current buyer demand.
2. Qualification Call — We'll schedule a brief call to discuss structure and pricing guidance.
3. Buyer Introduction — Qualified buyers are introduced under mutual NDA.

IMPORTANT DISCLOSURES
License Data Bureau is a data licensing facilitator, not a data broker dealing in personal information. We do not purchase, store, or resell your data. Any valuation estimates are preliminary indicators only — not appraisals, not guarantees, and not financial advice. You retain full ownership of your data at all times.

Questions? Reply to this email or contact us at contact@licensedatabureau.com.

---
License Data Bureau · licensedatabureau.com
Privacy Policy: https://licensedatabureau.com/legal/privacy-policy
Terms: https://licensedatabureau.com/legal/terms-of-service
Disclaimer: https://licensedatabureau.com/legal/disclaimer`;
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
