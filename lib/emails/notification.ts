export interface QualifyFormData {
  name: string;
  company: string;
  email: string;
  industry: string;
  dataType: string;
  volumeRecords: string;
  yearsAvailable: string;
  notes?: string;
}

export function notificationEmailHtml(data: QualifyFormData, submittedAt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Qualification Request — License Data Bureau</title>
  <style>
    body { margin: 0; padding: 0; background: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1a1a2e; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.12); }
    .header { background: #0a1628; padding: 24px 32px; }
    .header-title { color: #c9a84c; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; margin: 0 0 4px; }
    .header-sub { color: #ffffff; font-size: 20px; font-weight: 700; margin: 0; }
    .badge { display: inline-block; background: #c9a84c; color: #0a1628; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; margin-top: 10px; }
    .body { padding: 28px 32px; }
    .section-label { font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #6b7280; margin: 0 0 12px; }
    .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-bottom: 24px; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; }
    .field { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; }
    .field:nth-last-child(-n+2) { border-bottom: none; }
    .field-label { font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 3px; }
    .field-value { font-size: 14px; color: #0a1628; font-weight: 500; }
    .notes-block { background: #f8fafc; border-left: 3px solid #1a9b8a; padding: 14px 16px; border-radius: 0 6px 6px 0; margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #374151; }
    .cta { text-align: center; margin: 24px 0; }
    .cta a { display: inline-block; background: #1a9b8a; color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; }
    .meta { font-size: 12px; color: #9ca3af; margin-top: 24px; padding-top: 20px; border-top: 1px solid #f0f0f0; }
    .footer { background: #f8fafc; padding: 16px 32px; font-size: 11px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; }
    .full-width { grid-column: span 2; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <p class="header-title">License Data Bureau — Internal Alert</p>
      <h1 class="header-sub">New Qualification Request</h1>
      <span class="badge">Action Required</span>
    </div>
    <div class="body">
      <p class="section-label">Contact</p>
      <div class="field-grid">
        <div class="field">
          <div class="field-label">Name</div>
          <div class="field-value">${escHtml(data.name)}</div>
        </div>
        <div class="field">
          <div class="field-label">Company</div>
          <div class="field-value">${escHtml(data.company)}</div>
        </div>
        <div class="field full-width">
          <div class="field-label">Email</div>
          <div class="field-value"><a href="mailto:${escHtml(data.email)}" style="color:#1a9b8a;">${escHtml(data.email)}</a></div>
        </div>
      </div>

      <p class="section-label">Corpus Details</p>
      <div class="field-grid">
        <div class="field">
          <div class="field-label">Industry</div>
          <div class="field-value">${escHtml(data.industry)}</div>
        </div>
        <div class="field">
          <div class="field-label">Data Type</div>
          <div class="field-value">${escHtml(data.dataType)}</div>
        </div>
        <div class="field">
          <div class="field-label">Volume (Records)</div>
          <div class="field-value">${escHtml(data.volumeRecords)}</div>
        </div>
        <div class="field">
          <div class="field-label">Years Available</div>
          <div class="field-value">${escHtml(data.yearsAvailable)}</div>
        </div>
      </div>

      ${data.notes ? `
      <p class="section-label">Additional Notes</p>
      <div class="notes-block">${escHtml(data.notes)}</div>
      ` : ''}

      <div class="cta">
        <a href="mailto:${escHtml(data.email)}?subject=Re: License Data Bureau — Your Qualification Request">Reply to ${escHtml(data.name)}</a>
      </div>

      <div class="meta">
        Submitted: ${submittedAt}<br />
        Source: licensedatabureau.com/qualify
      </div>
    </div>
    <div class="footer">
      License Data Bureau · licensedatabureau.com · contact@licensedatabureau.com<br />
      This is an internal notification. Do not forward outside the organization.
    </div>
  </div>
</body>
</html>`;
}

export function notificationEmailText(data: QualifyFormData, submittedAt: string): string {
  return `New Qualification Request — License Data Bureau
================================================

Contact
-------
Name:     ${data.name}
Company:  ${data.company}
Email:    ${data.email}

Corpus Details
--------------
Industry:         ${data.industry}
Data Type:        ${data.dataType}
Volume (Records): ${data.volumeRecords}
Years Available:  ${data.yearsAvailable}
${data.notes ? `\nNotes:\n${data.notes}` : ''}

Submitted: ${submittedAt}
Source: licensedatabureau.com/qualify

---
License Data Bureau · contact@licensedatabureau.com`;
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
