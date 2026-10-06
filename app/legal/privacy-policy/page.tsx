import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Privacy Policy — License & Data Bureau',
  description: 'Privacy Policy for License & Data Bureau. Learn how we collect, use, and protect your personal and business information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-h1">Privacy Policy</h1>
          <p className="legal-date">Last updated: October 6, 2026</p>

          <div className="legal-body">
            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect information necessary to evaluate and facilitate data licensing engagements:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Business Information:</strong> Industry, operational data volume, years of operation, data types, and organizational structure relevant to a licensing qualification</li>
                <li><strong>Data Samples:</strong> De-identified or redacted samples you voluntarily submit for corpus evaluation purposes</li>
                <li><strong>Communications:</strong> Records of emails, phone calls, and form submissions related to your engagement</li>
                <li><strong>Website Usage:</strong> IP address, browser type, pages visited, and interaction data collected through standard web analytics</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Evaluate your data corpus for AI licensing suitability and produce a qualification assessment</li>
                <li>Match your dataset with appropriate buyer candidates in our network</li>
                <li>Communicate with data buyers on your behalf during the placement process</li>
                <li>Structure, negotiate, and close licensing agreements</li>
                <li>Respond to your inquiries and provide client support</li>
                <li>Improve our qualification methodology and buyer-matching process</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>3. Information Sharing</h2>
              <p>We share your information only as necessary to facilitate a licensing transaction:</p>
              <ul>
                <li><strong>Qualified Data Buyers:</strong> Anonymized corpus profiles shared with vetted AI companies under NDA prior to any identifying disclosure</li>
                <li><strong>Legal Counsel:</strong> To draft, review, or execute licensing agreements</li>
                <li><strong>Payment Processors:</strong> To process fees for our services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              </ul>
              <p>We do not sell, rent, or trade your personal or business information to third parties for marketing purposes. Buyer introductions occur only with your explicit written authorization.</p>
            </section>

            <section>
              <h2>4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information, including encrypted data transmission (SSL/TLS), secure storage, access controls, and confidentiality agreements with all staff and contractors. While we take reasonable precautions, no method of electronic transmission or storage is 100% secure.</p>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>We retain client information for as long as necessary to provide our services and comply with legal obligations. Engagement records are typically retained for seven (7) years following the completion of a service engagement. You may request deletion of your personal information by contacting us, subject to any legal retention requirements.</p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:privacy@licensedatabureau.com">privacy@licensedatabureau.com</a>.</p>
            </section>

            <section>
              <h2>7. Cookies and Tracking</h2>
              <p>Our website uses cookies and similar technologies to improve user experience and analyze website traffic. When you first visit our site, you are presented with a cookie consent banner where you can accept or decline non-essential cookies. You can change your choice at any time by clearing your browser's stored site data and revisiting. Essential cookies required for website functionality cannot be disabled. Declining non-essential cookies will not affect your ability to use the core features of this website.</p>
            </section>

            <section>
              <h2>8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
            </section>

            <section>
              <h2>9. Children's Privacy</h2>
              <p>Our services are intended for business professionals and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.</p>
            </section>

            <section>
              <h2>10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>For questions about this Privacy Policy or our data practices, contact us at:</p>
              <p>License &amp; Data Bureau LLC<br />Email: <a href="mailto:privacy@licensedatabureau.com">privacy@licensedatabureau.com</a><br />General: <a href="mailto:contact@licensedatabureau.com">contact@licensedatabureau.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
