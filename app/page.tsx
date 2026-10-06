import Link from 'next/link';
import Accordion from '@/components/Accordion';
import { BRAND } from '@/lib/brand';
import Nav from '@/components/Nav';
import { QualifyForm } from '@/components/shared/qualify-form';

/* ── Data ─────────────────────────────────────────────────── */
const news = [
  { source: 'Aaron Levie / X',  quote: '"Information belongs as an asset on the balance sheet."', href: 'https://x.com/levie/status/1870880047059747159' },
  { source: 'Ali Ansari / X',   quote: '"Human data will be a $1 trillion a year market."', href: 'https://x.com/aliansarinik/status/1866604601628979418' },
  { source: 'Business Insider', quote: '"Google paid $10M for Spirit Airlines\' corporate data."', href: 'https://www.businessinsider.com/google-ai-training-data-spirit-airlines-2024-5' },
  { source: 'VFF',              quote: '"Startup Slack threads are being bought as training data."', href: 'https://vff.ai/' },
];

const faq = [
  { q: 'What data are we talking about?',
    a: 'Operational records — jobs, matters, estimates, tickets, decisions and outcomes — created by running your business. Not customer PII. Not financial accounts. The procedural and outcome record of how your company actually works.' },
  { q: 'Who handles the preparation?',
    a: 'LDB handles everything. We write missing SOPs, inventory the records, scrub identifiers, and package the corpus. You spend roughly 4–6 hours on access and context calls. The rest is ours.' },
  { q: 'Do I need technical staff for this?',
    a: 'No. You run your business. LDB handles preparation, packaging, buyer qualification, and transfer logistics from start to close.' },
  { q: 'Does licensing mean giving up ownership?',
    a: 'No. A license is a defined, time-limited grant of access to a copy of your records. You retain full ownership. The business operates exactly as before. Your customer relationships, systems, and data are untouched.' },
  { q: 'Does every business qualify?',
    a: 'No. Most will not. A recent inbox is not an asset. A five-year pattern of routing decisions, exception handling, and outcome data is. Use the valuation terminal above to get an initial read on your profile.' },
];

const stages = [
  { num: '01', name: 'Access & Review' },
  { num: '02', name: 'Write What Is Missing' },
  { num: '03', name: 'Inventory & Scrub' },
  { num: '04', name: 'Find the Buyer' },
  { num: '05', name: 'Package, Transfer, Close' },
];

const stageContent = [
  {
    num: '01',
    title: 'Access & Review',
    body: 'You give us access and context. We review your records, interview your team, and map what years of operations actually produced — jobs, exceptions, outcomes, and the patterns your people carry in their heads. Most business owners are surprised by how much is actually there.',
  },
  {
    num: '02',
    title: 'Write What Is Missing',
    body: "Most businesses have workflow knowledge in people's heads, not in documents. We write the missing SOPs so the corpus is complete, transferable, and legible to a buyer's technical team. An undocumented process is not an asset. A documented one is.",
  },
  {
    num: '03',
    title: 'Inventory & Scrub',
    body: 'We catalog every record type, exclude customer names, personal identifiers, payment records, and credentials. What remains is strictly operational — and licensable without privacy risk to your customers. We produce a structured manifest the buyer can audit.',
  },
  {
    num: '04',
    title: 'Find the Buyer',
    body: 'We take the package to vetted buyers — AI companies, research labs, and model developers actively seeking operational datasets. We qualify fit, run diligence on both sides, and manage the negotiation. You never talk to buyers cold.',
  },
  {
    num: '05',
    title: 'Package, Transfer, Close',
    body: 'We handle the legal package, negotiate final terms, manage transfer logistics. You review, you sign, you get paid. The underlying data stays yours. The business runs exactly as it did before.',
  },
];

const qualItems = [
  { num: 'S1.01', title: 'Years of Operation', body: 'Buyers want depth, not recency. A five-year corpus of routing decisions or legal matter outcomes carries more signal than a year of high-volume transactions. We look for a minimum of 3 years; 7+ is where valuations accelerate.' },
  { num: 'S1.02', title: 'Record Density', body: 'Volume matters, but so does richness. 500 well-documented exception-handling logs with outcomes beat 50,000 bare transaction rows. We assess both dimensions before representing a corpus to any buyer.' },
  { num: 'S1.03', title: 'Operational Complexity', body: 'Simple, repetitive records rarely command premium pricing. Businesses with decision trees, exception handling, cross-functional coordination, and measurable outcomes are what AI buyers are paying for in 2025.' },
];

const tickerItems = [
  'AI training data market projected at $1T by 2030',
  'Operational datasets command 3–8× premium over raw transaction logs',
  'Average LDB close: 12 weeks from qualification to payment',
  '100% retained operations — zero business disruption',
  'All customer PII scrubbed before any buyer contact',
  'Exclusive and non-exclusive licensing structures available',
];

export default function Home() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <>
      <Nav />
      {/* ── EXECUTIVE SUMMARY ─────────────────────────────── */}
      <section className="prsp-executive">
        <div className="container prsp-exec-grid">
          {/* ── LEFT: headline + CTAs ── */}
          <div className="prsp-exec-left">
            <div className="prsp-exec-eyebrow">
              Executive Summary — Data Licensing Prospectus
            </div>
            <h1 className="prsp-exec-headline">
              Your operational records are a <em>licensable asset.</em><br />
              Most owners don&apos;t know that yet.
            </h1>
            <div className="prsp-cta-row">
              <a href="#terminal" className="btn-gold">Run your qualification</a>
              <a href={`mailto:${BRAND.email}`} className="btn-outline">Schedule a call</a>
              <p className="prsp-cta-sub">
                No technical staff required. Average time to qualification: 30 minutes.
              </p>
            </div>
          </div>

          {/* ── RIGHT: deal tombstone stack ── */}
          <div className="hero-tombstone-wrapper">
            {/* Secondary tombstone — background */}
            <div className="tombstone-secondary">
              <div className="ts-archive">IN DILIGENCE / ARCHIVE LDB-2026-NYT</div>
              <div className="ts-amount">$294,000</div>
              <div className="ts-sector-pill">SECTOR: INDUSTRIAL WORKFLOW</div>
            </div>
            {/* Primary tombstone — foreground */}
            <div className="tombstone-primary">
              <div className="ts-header">
                <span className="ts-status-dot"></span>
                <span className="ts-archive">CLOSED TRANSACTION / ARCHIVE LDB-2026-CHX</span>
              </div>
              <div className="ts-amount-row">
                <div className="ts-amount">$173,163</div>
                <div className="ts-transferred">TRANSFERRED TO SELLER</div>
              </div>
              <div className="ts-sector-pill">SECTOR: LOGISTICS &amp; ROUTING</div>
              <div className="ts-ledger">
                <div className="ts-ledger-row">
                  <span className="ts-ledger-label">Transaction Type</span>
                  <span className="ts-ledger-val">Data Licensing Agreement</span>
                </div>
                <div className="ts-ledger-row">
                  <span className="ts-ledger-label">Corpus Size</span>
                  <span className="ts-ledger-val">4.2M records / 18 mo.</span>
                </div>
                <div className="ts-ledger-row">
                  <span className="ts-ledger-label">Time to Close</span>
                  <span className="ts-ledger-val">11 weeks</span>
                </div>
              </div>
              <div className="ts-footer">
                <div className="ts-sig">
                  <span className="ts-sig-name">D. Harrington</span>
                  <span className="ts-sig-role">Senior Deal Lead, LDB</span>
                </div>
                <svg className="ts-stamp" width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" stroke="#0d7a6e" strokeWidth="1.5" />
                  <circle cx="32" cy="32" r="26" stroke="#0d7a6e" strokeWidth="0.5" strokeDasharray="2 2" />
                  <text x="32" y="28" textAnchor="middle" fontFamily="var(--font-roboto-mono, monospace)" fontSize="6" fill="#0d7a6e" fontWeight="600" letterSpacing="1">CERTIFIED</text>
                  <text x="32" y="36" textAnchor="middle" fontFamily="var(--font-roboto-mono, monospace)" fontSize="7" fill="#0d7a6e" fontWeight="700" letterSpacing="2">LDB</text>
                  <text x="32" y="44" textAnchor="middle" fontFamily="var(--font-roboto-mono, monospace)" fontSize="5" fill="#0d7a6e" letterSpacing="0.5">AUSTIN · TX</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="prsp-exec-strip">
          <div className="container" style={{ display: 'contents' }}>
            <div className="prsp-exec-stat">
              <div className="prsp-exec-stat-label">Closed Deal</div>
              <div className="prsp-exec-stat-val teal">$173,163</div>
              <div className="prsp-exec-stat-sub">Chicago Logistics · 2025</div>
            </div>
            <div className="prsp-exec-stat">
              <div className="prsp-exec-stat-label">Avg. Time to Close</div>
              <div className="prsp-exec-stat-val">12 wks</div>
              <div className="prsp-exec-stat-sub">Qualification to payment</div>
            </div>
            <div className="prsp-exec-stat">
              <div className="prsp-exec-stat-label">Business Disruption</div>
              <div className="prsp-exec-stat-val">0%</div>
              <div className="prsp-exec-stat-sub">Ops continue unchanged</div>
            </div>
            <div className="prsp-exec-stat">
              <div className="prsp-exec-stat-label">Owner Retained</div>
              <div className="prsp-exec-stat-val teal">100%</div>
              <div className="prsp-exec-stat-sub">Ownership, systems, customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────── */}
      <div className="ticker-section">
        <div className="ticker-label">Market Signal</div>
        <div className="ticker-track">
          <div className="ticker-inner">
            {doubled.map((item, i) => (
              <span className="ticker-item" key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── QUALIFICATION CRITERIA ────────────────────────── */}
      <section className="prsp-qual-section">
        <div className="container">
          <div className="prsp-section-header">
            <h2 className="prsp-section-title">What makes a corpus licensable</h2>
            <div className="prsp-section-ref">
              <div>SECTION 1 — QUALIFICATION CRITERIA</div>
              <div>REF: LDB-QC-2026</div>
            </div>
          </div>
          <div className="prsp-qual-grid">
            {qualItems.map((item) => (
              <div className="prsp-qual-cell" key={item.num}>
                <div className="prsp-qual-cell-num">{item.num}</div>
                <div className="prsp-qual-cell-title">{item.title}</div>
                <div className="prsp-qual-cell-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIT LEDGER ──────────────────────────────────── */}
      <section className="prsp-ledger-section" id="ledger">
        <div className="container">
          <div className="prsp-ledger-header">
            <div className="prsp-ledger-title-col">
              <div className="prsp-ledger-eyebrow">Filed Transaction — Case Study</div>
              <h2 className="prsp-ledger-title">
                How a regional logistics firm turned five years of routing data into a <em>six-figure asset.</em>
              </h2>
            </div>
            <div className="prsp-ledger-payout">
              <div className="prsp-ledger-payout-label">Paid to the owner</div>
              <div className="prsp-ledger-payout-val">$173,163</div>
            </div>
          </div>
  
        {/* ── Institutional Badges */}
        <div className="ledger-badges">
          <div className="ledger-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1L1 3.5V9C1 12.8 4.1 15.5 8 16C11.9 15.5 15 12.8 15 9V3.5L8 1Z" fill="#0d7a6e"/>
              <path d="M5 8L7 10L11 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            SOC 2 Type II Compliant Workflow
          </div>
          <div className="ledger-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="#0d7a6e" strokeWidth="1.2"/>
              <path d="M5 8H11M8 5V11" stroke="#0d7a6e" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            100% Anonymized Corpus Delivery
          </div>
          <div className="ledger-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#0d7a6e" strokeWidth="1.2"/>
              <path d="M5 7H11M5 10H9" stroke="#0d7a6e" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            NDA-Protected Valuation Process
          </div>
          <div className="ledger-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2L10.2 6.2L15 6.9L11.5 10.3L12.4 15L8 12.7L3.6 15L4.5 10.3L1 6.9L5.8 6.2L8 2Z" stroke="#0d7a6e" strokeWidth="1.2" fill="none"/>
            </svg>
            Institutional-Grade Licensing Terms
          </div>
        </div>

        {/* ── Corpus Structuring Diagram */}
        <div className="corpus-flow">
          <div className="corpus-flow-label">CORPUS STRUCTURING PIPELINE</div>
          <svg className="corpus-flow-svg" viewBox="0 0 700 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Data corpus structuring flow: Raw Data → Anonymization → Schema Mapping → Corpus Build → License Delivery">
            {/* Node 1 */}
            <rect x="0" y="20" width="110" height="40" rx="4" fill="#f8fafc" stroke="#0d7a6e" strokeWidth="1"/>
            <text x="55" y="36" textAnchor="middle" fill="#0d7a6e" fontSize="8" fontFamily="monospace" letterSpacing="0.5">INTAKE</text>
            <text x="55" y="50" textAnchor="middle" fill="#44546a" fontSize="9" fontFamily="monospace">Raw Data</text>
            {/* Arrow */}
            <line x1="110" y1="40" x2="143" y2="40" stroke="#0d7a6e" strokeWidth="1" strokeDasharray="3,2"/>
            <polygon points="140,37 146,40 140,43" fill="#0d7a6e"/>
            {/* Node 2 */}
            <rect x="146" y="20" width="120" height="40" rx="4" fill="#f8fafc" stroke="#0d7a6e" strokeWidth="1"/>
            <text x="206" y="36" textAnchor="middle" fill="#0d7a6e" fontSize="8" fontFamily="monospace" letterSpacing="0.5">SCRUB</text>
            <text x="206" y="50" textAnchor="middle" fill="#44546a" fontSize="9" fontFamily="monospace">Anonymization</text>
            {/* Arrow */}
            <line x1="266" y1="40" x2="299" y2="40" stroke="#0d7a6e" strokeWidth="1" strokeDasharray="3,2"/>
            <polygon points="296,37 302,40 296,43" fill="#0d7a6e"/>
            {/* Node 3 */}
            <rect x="302" y="20" width="120" height="40" rx="4" fill="#f8fafc" stroke="#0d7a6e" strokeWidth="1"/>
            <text x="362" y="36" textAnchor="middle" fill="#0d7a6e" fontSize="8" fontFamily="monospace" letterSpacing="0.5">SCHEMA</text>
            <text x="362" y="50" textAnchor="middle" fill="#44546a" fontSize="9" fontFamily="monospace">Normalization</text>
            {/* Arrow */}
            <line x1="422" y1="40" x2="455" y2="40" stroke="#0d7a6e" strokeWidth="1" strokeDasharray="3,2"/>
            <polygon points="452,37 458,40 452,43" fill="#0d7a6e"/>
            {/* Node 4 */}
            <rect x="458" y="20" width="110" height="40" rx="4" fill="#f8fafc" stroke="#0d7a6e" strokeWidth="1.5"/>
            <text x="513" y="36" textAnchor="middle" fill="#0d7a6e" fontSize="8" fontFamily="monospace" letterSpacing="0.5">CORPUS</text>
            <text x="513" y="50" textAnchor="middle" fill="#44546a" fontSize="9" fontFamily="monospace">Build &amp; Package</text>
            {/* Arrow */}
            <line x1="568" y1="40" x2="601" y2="40" stroke="#0d7a6e" strokeWidth="1" strokeDasharray="3,2"/>
            <polygon points="598,37 604,40 598,43" fill="#0d7a6e"/>
            {/* Node 5 */}
            <rect x="604" y="20" width="96" height="40" rx="4" fill="#e0f5f3" stroke="#0d7a6e" strokeWidth="1.5"/>
            <text x="652" y="36" textAnchor="middle" fill="#0d7a6e" fontSize="8" fontFamily="monospace" letterSpacing="0.5">LICENSE</text>
            <text x="652" y="50" textAnchor="middle" fill="#0b1b2e" fontSize="9" fontFamily="monospace">Delivery</text>
          </svg>
        </div>
        <table className="prsp-audit-table">
            <tbody>
              {[
                ['Asset',    'Five years of anonymized routing logs: 340,000+ delivery decisions, exception resolutions, driver performance outcomes, and seasonal demand patterns. All customer names and addresses removed prior to delivery.'],
                ['Location', 'Chicago, IL — regional logistics operator, 12 vehicles, 8 staff. Operations continued without interruption throughout the 14-week process.'],
                ['Removed',  'All customer names, driver identities, payment records, and location specifics that could identify individual clients. What remained was strictly operational.'],
                ['Term',     'Defined license — time-limited grant. Licensor retains full ownership of all underlying records. Buyer received a structured copy for model training purposes only.'],
                ['Retained', 'All underlying records, dispatch systems, customer relationships, and operational infrastructure. The business operates exactly as it did before the license.'],
                ['Payout',   '$173,163 after LDB fee — a pure-profit dividend from existing operations. No new revenue stream to build. No customer relationship at risk. No capital deployed.'],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td className="prsp-audit-key">{k}</td>
                  <td className="prsp-audit-val">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── MARKET INTELLIGENCE ───────────────────────────── */}
      <section className="prsp-market-section">
        <div className="container" style={{ display: 'contents' }}>
          <div className="prsp-market-sidebar" style={{ paddingLeft: '40px' }}>
            <div className="prsp-market-label">Market Intelligence</div>
            <div className="prsp-market-index-title">
              Why this market exists now
            </div>
            <div className="prsp-market-index-note">
              AI model developers have exhausted public internet data. Operational records from private businesses are the next frontier.
            </div>
          </div>
          <div className="prsp-market-list" style={{ paddingRight: '40px' }}>
            {news.map((item) => (
              <div className="prsp-market-row" key={item.source}>
                <div className="prsp-market-source">{item.source}</div>
                <div className="prsp-market-quote">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.quote}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR TERMINAL ───────────────────────────── */}
      <section className="prsp-terminal-section" id="terminal">
        <div className="prsp-terminal-header">
          <span className="prsp-terminal-label">
            Data Licensing Application — Ref. LDB-CALC-2026
          </span>
        </div>
        <div className="prsp-terminal-body">
      <div className="intake-terminal">

        {/* ── LEFT: Trust Panel */}
        <div className="intake-trust">
          <div className="intake-trust-eyebrow">Data Licensing Application</div>
          <h2 className="intake-trust-title">Is your operational data eligible for institutional licensing?</h2>
          <p className="intake-trust-desc">
            LDB structures proprietary operational datasets for licensing to enterprise AI labs,
            research institutions, and quantitative funds. Qualification is strict — and intentionally so.
          </p>
          <div className="intake-criteria">
            <div className="intake-criterion">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 0.5L0.5 3V8.5C0.5 11.8 3.4 13.8 7 14C10.6 13.8 13.5 11.8 13.5 8.5V3L7 0.5Z" fill="#0d7a6e" opacity="0.3" stroke="#0d7a6e" strokeWidth="0.8"/><path d="M4.5 7L6 8.5L9.5 5" stroke="#0d7a6e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Minimum 12 months of longitudinal records
            </div>
            <div className="intake-criterion">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 0.5L0.5 3V8.5C0.5 11.8 3.4 13.8 7 14C10.6 13.8 13.5 11.8 13.5 8.5V3L7 0.5Z" fill="#0d7a6e" opacity="0.3" stroke="#0d7a6e" strokeWidth="0.8"/><path d="M4.5 7L6 8.5L9.5 5" stroke="#0d7a6e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Commercially-generated, not scraped
            </div>
            <div className="intake-criterion">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 0.5L0.5 3V8.5C0.5 11.8 3.4 13.8 7 14C10.6 13.8 13.5 11.8 13.5 8.5V3L7 0.5Z" fill="#0d7a6e" opacity="0.3" stroke="#0d7a6e" strokeWidth="0.8"/><path d="M4.5 7L6 8.5L9.5 5" stroke="#0d7a6e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Clear chain of ownership and IP rights
            </div>
            <div className="intake-criterion">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 0.5L0.5 3V8.5C0.5 11.8 3.4 13.8 7 14C10.6 13.8 13.5 11.8 13.5 8.5V3L7 0.5Z" fill="#0d7a6e" opacity="0.3" stroke="#0d7a6e" strokeWidth="0.8"/><path d="M4.5 7L6 8.5L9.5 5" stroke="#0d7a6e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Anonymizable without loss of structural value
            </div>
          </div>
          <div className="intake-payout-range">
            <div className="intake-payout-label">ESTIMATED LICENSE RANGE</div>
            <div className="intake-payout-figures">
              <span className="intake-payout-lo">$50,000</span>
              <span className="intake-payout-sep">&mdash;</span>
              <span className="intake-payout-hi">$300,000+</span>
            </div>
            <div className="intake-payout-note">Dependent on corpus size, exclusivity terms, and buyer demand at time of placement.</div>
          </div>
          <div className="intake-privacy-badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 0.5L0.5 2.5V7C0.5 9.8 2.9 11.5 6 12C9.1 11.5 11.5 9.8 11.5 7V2.5L6 0.5Z" stroke="#8aada8" strokeWidth="0.8"/><path d="M3.5 6L5 7.5L8.5 4" stroke="#8aada8" strokeWidth="1" strokeLinecap="round"/></svg>
            Zero-retention intake. No data stored without executed NDA.
          </div>
        </div>

        {/* ── RIGHT: Form Panel */}
        <div className="intake-form-panel">
          <div className="intake-steps">
            <div className="intake-step active"><span className="intake-step-num">01</span><span className="intake-step-label">Industry</span></div>
            <div className="intake-step-line" />
            <div className="intake-step"><span className="intake-step-num">02</span><span className="intake-step-label">Data Type</span></div>
            <div className="intake-step-line" />
            <div className="intake-step"><span className="intake-step-num">03</span><span className="intake-step-label">Volume</span></div>
            <div className="intake-step-line" />
            <div className="intake-step"><span className="intake-step-num">04</span><span className="intake-step-label">Timeline</span></div>
          </div>

          <div className="intake-form-eyebrow">SECTION 2 — VALUATION ESTIMATE</div>
          <div className="intake-form-heading">Score your operational data corpus in 60 seconds.</div>

          <div className="cx-form" id="cx-form">
            <div className="cx-section">
              <div className="cx-section-label">01 &mdash; Primary industry sector</div>
              <div className="cx-opts" role="group" aria-label="Industry sector">
                <button className="cx-opt" data-group="industry" data-val="healthcare" type="button">Healthcare</button>
                <button className="cx-opt" data-group="industry" data-val="finance" type="button">Finance</button>
                <button className="cx-opt" data-group="industry" data-val="logistics" type="button">Logistics</button>
                <button className="cx-opt" data-group="industry" data-val="retail" type="button">Retail</button>
                <button className="cx-opt" data-group="industry" data-val="legal" type="button">Legal</button>
                <button className="cx-opt" data-group="industry" data-val="other" type="button">Other</button>
              </div>
            </div>
            <div className="cx-section">
              <div className="cx-section-label">02 &mdash; Primary data type</div>
              <div className="cx-opts" role="group" aria-label="Data type">
                <button className="cx-opt" data-group="dtype" data-val="transactional" type="button">Transactional</button>
                <button className="cx-opt" data-group="dtype" data-val="behavioral" type="button">Behavioral</button>
                <button className="cx-opt" data-group="dtype" data-val="clinical" type="button">Clinical / Lab</button>
                <button className="cx-opt" data-group="dtype" data-val="operational" type="button">Operational Logs</button>
                <button className="cx-opt" data-group="dtype" data-val="geospatial" type="button">Geospatial</button>
                <button className="cx-opt" data-group="dtype" data-val="nlp" type="button">Text / NLP</button>
              </div>
            </div>
            <div className="cx-section">
              <div className="cx-section-label">03 &mdash; Estimated data volume</div>
              <div className="cx-opts" role="group" aria-label="Data volume">
                <button className="cx-opt" data-group="volume" data-val="small" type="button">&lt; 100K records</button>
                <button className="cx-opt" data-group="volume" data-val="medium" type="button">100K &ndash; 1M</button>
                <button className="cx-opt" data-group="volume" data-val="large" type="button">1M &ndash; 10M</button>
                <button className="cx-opt" data-group="volume" data-val="xlarge" type="button">10M+</button>
              </div>
            </div>
            <div className="cx-section">
              <div className="cx-section-label">04 &mdash; Years of historical data</div>
              <div className="cx-opts" role="group" aria-label="Years of historical data">
                <button className="cx-opt" data-group="years" data-val="one" type="button">1 year</button>
                <button className="cx-opt" data-group="years" data-val="three" type="button">2&ndash;3 years</button>
                <button className="cx-opt" data-group="years" data-val="five" type="button">4&ndash;5 years</button>
                <button className="cx-opt" data-group="years" data-val="tenplus" type="button">6+ years</button>
              </div>
            </div>
            <button className="cx-go" type="button" disabled>
              Run Valuation Estimate &rarr;
            </button>
          </div>

          <div className="cx-results">
            <div className="res-hero-wrap">
              <div className="res-hero-label">Estimated Valuation &mdash; Midpoint</div>
              <div className="res-hero">&mdash;</div>
              <div className="res-pot">&mdash;</div>
            </div>
            <div className="res-next">&mdash;</div>
            <div className="res-cta">
              <a href="#qualify" className="btn-gold">Start qualification &rarr;</a>
              <a href="#protocol" className="btn-outline">How the process works</a>
            </div>
            <p className="cx-disclaimer">
              Estimates are preliminary indicators only &mdash; not appraisals, not guarantees of sale, and not financial advice.
              Actual licensing outcomes depend on buyer interest, corpus quality, and negotiation.{' '}
              <a href="/legal/disclaimer">Full disclaimer &rarr;</a>
            </p>
          </div>
        </div>

      </div>
    </div>
</section>

      {/* ── OPERATIONAL PROTOCOL ──────────────────────────── */}
      <section className="prsp-protocol-section" id="protocol">
        <div className="prsp-protocol-nav">
          <div className="prsp-protocol-nav-label">Operational Protocol</div>
          <div className="prsp-stage-list">
            {stages.map((s) => (
              <div className="prsp-stage-item" key={s.num}>
                <span className="prsp-stage-num">{s.num}</span>
                <span className="prsp-stage-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="prsp-protocol-content">
          {stageContent.map((s) => (
            <div className="prsp-protocol-block" key={s.num}>
              <div className="prsp-protocol-block-num">{s.num}</div>
              <h3 className="prsp-protocol-block-title">{s.title}</h3>
              <p className="prsp-protocol-block-body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DATA GOVERNANCE ───────────────────────────────── */}
      <section className="prsp-governance-section" id="governance">
        <div className="container">
          <div className="prsp-section-header">
            <h2 className="prsp-section-title">Data governance & privacy</h2>
            <div className="prsp-section-ref">
              <div>SECTION 3 — GOVERNANCE</div>
              <div>REF: LDB-DG-2026</div>
            </div>
          </div>
          <div className="prsp-gov-grid">
            <div>
              <div className="prsp-gov-label">What is excluded</div>
              <div className="prsp-gov-title">Customer PII is never in scope.</div>
              <p className="prsp-gov-text">
                Before any buyer contact, LDB removes all customer names, personal
                identifiers, payment records, account numbers, and location data
                that could identify individual clients. What remains is strictly
                operational: process steps, decision logic, outcomes, and system
                states. No buyer ever sees who your customers are.
              </p>
            </div>
            <div>
              <div className="prsp-gov-label">Licensing structure</div>
              <div className="prsp-gov-title">You license a copy. You keep the original.</div>
              <p className="prsp-gov-text">
                A data license is a defined, time-limited grant of access to a
                structured copy of your operational records. You retain full
                ownership of all underlying data, systems, and business
                infrastructure. The license does not transfer IP, does not affect
                customer relationships, and does not alter how your business
                operates. You can continue using your own data without restriction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPENDIX / FAQ ────────────────────────────────── */}
      <section className="prsp-appendix-section">
        <div className="container">
          <div className="prsp-section-header">
            <h2 className="prsp-section-title">Frequently asked questions</h2>
            <div className="prsp-section-ref">
              <div>APPENDIX A — FAQ</div>
              <div>REF: LDB-FAQ-2026</div>
            </div>
          </div>
          <Accordion items={faq} />
        </div>
      </section>

      {/* ── QUALIFY FORM ────────────────────────────────── */}
      <section className="qualify-section" id="qualify">
        <div className="qualify-container">
          <p className="qualify-eyebrow">Data Corpus Qualification</p>
          <h2 className="qualify-heading">Ready to explore what your data is worth?</h2>
          <p className="qualify-sub">Fill out the form below and we&apos;ll review your corpus against current buyer demand. No commitment required — no data is collected or stored without an executed NDA.</p>
          <QualifyForm />
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="prsp-footer">
            <div className="prsp-footer-brand">{BRAND.name}</div>
            <div className="prsp-footer-legal">
              {BRAND.legal} · {BRAND.location}<br />
              Not a government agency. Not a data broker dealing in personal information.
              Valuation estimates are preliminary indicators only — not appraisals, not guarantees of sale, and not financial advice.
              You retain full ownership of your data at all times.{' '}
              <a href="/legal/disclaimer" style={{color:'inherit', textDecoration:'underline'}}>Full disclaimer &rarr;</a>
            </div>
            <div className="prsp-footer-links">
              <a href={`mailto:${BRAND.email}`}>Contact</a>
              <a href="/legal/privacy-policy">Privacy</a>
              <a href="/legal/terms-of-service">Terms</a>
              <a href="/legal/disclaimer">Disclaimer</a>
              <a href="/legal/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
