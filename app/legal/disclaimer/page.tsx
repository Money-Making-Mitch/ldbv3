import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Disclaimer — License & Data Bureau',
  description: 'Professional disclaimer for License & Data Bureau. Important information about the nature of our data licensing facilitation services.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-h1">Disclaimer</h1>
          <p className="legal-date">Last updated: October 6, 2026</p>

          <div className="legal-body">
            <section className="legal-callout">
              <h2>Not a Government Agency</h2>
              <p>License &amp; Data Bureau LLC is a private company. We are not a government agency, and we are not affiliated with, endorsed by, or partnered with any federal, state, or local government entity, regulatory body, or industry standards organization.</p>
            </section>

            <section>
              <h2>Not Legal or Financial Advice</h2>
              <p>Nothing provided by License &amp; Data Bureau — whether through our website, calculator tools, communications, or services — constitutes legal, financial, tax, or investment advice. Data valuation estimates produced by our calculator or during a qualification conversation are indicative only and do not constitute a binding offer or guarantee of any transaction outcome. You should consult a licensed attorney, financial advisor, or CPA before entering into any licensing agreement or making decisions based on projected licensing revenues.</p>
            </section>

            <section>
              <h2>Not a Data Broker (for Resale of Personal Information)</h2>
              <p>LDB facilitates licenses of de-identified operational data between businesses. We do not broker the sale of personally identifiable information (PII). Our qualification process explicitly screens out and excludes customer names, individual identifiers, payment records, and protected health information from any corpus we represent. We do not operate as a data broker as defined under the California Consumer Privacy Act (CCPA) or similar statutes with respect to personal consumer information.</p>
            </section>

            <section>
              <h2>No Guaranteed Outcomes</h2>
              <p>While we maintain a network of qualified buyers and a structured placement process, we cannot guarantee that any given corpus will be placed, at what price, or within any specific timeframe. Demand for specific data types, buyer budgets, exclusivity requirements, and market conditions at the time of placement all affect outcomes. Valuation ranges and deal timelines presented during the qualification process are based on historical transactions and general market data and may not reflect current conditions.</p>
            </section>

            <section>
              <h2>You Own Your Data</h2>
              <p>LDB does not acquire ownership of or title to any data submitted for evaluation or licensing. Your data, systems, and customer relationships remain entirely yours throughout and after any engagement. A data license is a defined, time-limited grant of access to a structured copy — not a sale of underlying IP, business systems, or ownership rights.</p>
            </section>

            <section>
              <h2>Buyer Independence</h2>
              <p>Data buyers in our network operate independently and make their own purchasing decisions. LDB does not control buyer timelines, budget availability, or final terms. We represent your corpus in good faith but cannot compel any buyer to complete a transaction.</p>
            </section>

            <section>
              <h2>Accuracy of Website Information</h2>
              <p>We make every effort to ensure the information on our website is accurate and current. However, market conditions, regulatory requirements, and buyer demand change frequently. Information provided on this website is for general informational purposes and may not reflect the most current market data or legal requirements in your jurisdiction.</p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>For questions about this Disclaimer, contact us at:</p>
              <p>License &amp; Data Bureau LLC<br />Email: <a href="mailto:legal@licensedatabureau.com">legal@licensedatabureau.com</a><br />General: <a href="mailto:contact@licensedatabureau.com">contact@licensedatabureau.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
