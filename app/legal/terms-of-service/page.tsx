import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Terms of Service — License & Data Bureau',
  description: 'Terms of Service for License & Data Bureau. Review the terms governing our data licensing qualification and placement services.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-h1">Terms of Service</h1>
          <p className="legal-date">Last updated: October 6, 2026</p>

          <div className="legal-body">
            <section>
              <h2>1. Agreement to Terms</h2>
              <p>By accessing or using the services provided by License &amp; Data Bureau LLC ("we," "us," or "our"), including our website at licensedatabureau.com and all related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.</p>
            </section>

            <section>
              <h2>2. Description of Services</h2>
              <p>License &amp; Data Bureau provides data licensing facilitation services including but not limited to:</p>
              <ul>
                <li>Operational data corpus qualification and assessment</li>
                <li>Corpus structuring, anonymization guidance, and manifest preparation</li>
                <li>Buyer identification, introduction, and negotiation support</li>
                <li>Data licensing agreement structuring and transaction management</li>
                <li>Data valuation estimates (non-binding, for indicative purposes only)</li>
              </ul>
              <p>Our services are facilitation and advisory in nature. We are not a law firm, and our services do not constitute legal, financial, or investment advice. We do not purchase or take title to data. All licensing agreements are between you and the data buyer directly.</p>
            </section>

            <section>
              <h2>3. Service Engagement</h2>
              <p>Each engagement begins when you submit a qualification request through our website, email, or phone and we confirm acceptance. We will provide a scope of work and any applicable fees before beginning work. You authorize us to represent your corpus in general terms to prospective buyers under confidentiality, and to make specific introductions only upon your written approval of each buyer candidate.</p>
            </section>

            <section>
              <h2>4. Payment Terms</h2>
              <p>LDB operates on a success-fee basis for placement services. Fees are calculated as a percentage of total licensing consideration and are due upon closing of a licensing agreement, as specified in the engagement letter. For stand-alone qualification or corpus preparation services, flat fees are communicated and agreed upon prior to commencement. We accept payment via ACH transfer, wire transfer, and major credit cards.</p>
            </section>

            <section>
              <h2>5. Client Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and complete information about your data corpus, organization, and ownership rights</li>
                <li>Warrant that you have full legal authority to license the data you submit for evaluation</li>
                <li>Warrant that the data does not contain information that would violate applicable privacy laws, including but not limited to CCPA, HIPAA, GDPR, or COPPA</li>
                <li>Respond promptly to requests for documentation or clarification</li>
                <li>Notify us immediately of any changes that materially affect the corpus, your ownership rights, or your ability to license</li>
              </ul>
            </section>

            <section>
              <h2>6. Valuation Estimates</h2>
              <p>Any valuation range produced by our calculator or provided during a qualification conversation is an indicative estimate based on general market data and historical transaction patterns. It is not a binding offer, a guaranteed outcome, or financial advice. Actual transaction values depend on buyer demand, exclusivity terms, corpus quality, and market conditions at the time of placement. Past results do not guarantee future outcomes.</p>
            </section>

            <section>
              <h2>7. Confidentiality</h2>
              <p>We treat all client information and data corpus details as strictly confidential. We will not disclose your business information, data characteristics, or financial terms to any party except as necessary to perform the requested services, under confidentiality obligations, or as required by law. This obligation survives termination of the service engagement.</p>
            </section>

            <section>
              <h2>8. Intellectual Property</h2>
              <p>You retain full ownership of all data, metadata, and intellectual property submitted to LDB at all times. LDB does not acquire any ownership interest in your data by virtue of the engagement. We acquire only a limited, non-exclusive authorization to evaluate and represent your corpus for licensing purposes during the engagement term.</p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, License &amp; Data Bureau's total liability for any claim arising from our services shall not exceed the fees paid for the specific service giving rise to the claim in the twelve (12) months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits, business interruption, or failure to achieve projected licensing values.</p>
            </section>

            <section>
              <h2>10. Indemnification</h2>
              <p>You agree to indemnify and hold harmless License &amp; Data Bureau LLC, its officers, employees, and agents from any claims, damages, or expenses arising from: your use of our services; your breach of these terms; your provision of inaccurate, incomplete, or legally encumbered data; or any third-party claims related to your ownership of or right to license the submitted data.</p>
            </section>

            <section>
              <h2>11. Termination</h2>
              <p>Either party may terminate an engagement with written notice. If you terminate after corpus preparation work has begun, you are responsible for fees for work completed to date. Active buyer introductions that are terminated mid-process remain subject to success fees if a transaction closes within twelve (12) months of termination with any buyer introduced during the engagement.</p>
            </section>

            <section>
              <h2>12. Governing Law</h2>
              <p>These Terms of Service are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, seated in Austin, Texas.</p>
            </section>

            <section>
              <h2>13. Changes to Terms</h2>
              <p>We reserve the right to update these Terms of Service at any time. Changes take effect upon posting to our website. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2>14. Contact</h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <p>License &amp; Data Bureau LLC<br />Email: <a href="mailto:legal@licensedatabureau.com">legal@licensedatabureau.com</a><br />General: <a href="mailto:contact@licensedatabureau.com">contact@licensedatabureau.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
