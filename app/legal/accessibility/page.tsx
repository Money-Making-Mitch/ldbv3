import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Accessibility Statement — License & Data Bureau',
  description: 'Accessibility statement for License & Data Bureau. Our commitment to digital accessibility and WCAG compliance.',
}

export default function AccessibilityPage() {
  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-h1">Accessibility Statement</h1>
          <p className="legal-date">Last updated: October 6, 2026</p>

          <div className="legal-body">
            <section>
              <h2>Our Commitment</h2>
              <p>License &amp; Data Bureau is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply relevant accessibility standards to provide equal access to all users.</p>
            </section>

            <section>
              <h2>Conformance Status</h2>
              <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.</p>
            </section>

            <section>
              <h2>Measures Taken</h2>
              <p>We have taken the following measures to ensure accessibility of our website:</p>
              <ul>
                <li>Semantic HTML structure for proper screen reader navigation</li>
                <li>Sufficient color contrast ratios for text and interactive elements</li>
                <li>Keyboard navigation support for all interactive features including the data valuation calculator</li>
                <li>Descriptive alt text for all meaningful images and icons</li>
                <li>Properly labeled form fields and error messages</li>
                <li>Responsive design that works across devices and screen sizes</li>
                <li>Clear and consistent navigation patterns</li>
                <li>Focus indicators for interactive elements</li>
                <li>Reduced-motion support via <code>prefers-reduced-motion</code> media query</li>
              </ul>
            </section>

            <section>
              <h2>Compatibility</h2>
              <p>Our website is designed to be compatible with the following assistive technologies:</p>
              <ul>
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </section>

            <section>
              <h2>Known Limitations</h2>
              <p>While we strive for full accessibility, some content may not yet be fully accessible. We are actively working to identify and resolve any barriers. If you encounter any issues, please contact us so we can address them promptly.</p>
            </section>

            <section>
              <h2>Alternative Access</h2>
              <p>If you are unable to access any content or functionality on our website, we are happy to assist you directly. You can:</p>
              <ul>
                <li>Email us at <a href="mailto:contact@licensedatabureau.com">contact@licensedatabureau.com</a> to request information in an alternative format</li>
                <li>Request a phone-based consultation to complete the qualification process verbally</li>
              </ul>
            </section>

            <section>
              <h2>Feedback</h2>
              <p>We welcome feedback on the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please contact us:</p>
              <p>License &amp; Data Bureau LLC<br />Email: <a href="mailto:accessibility@licensedatabureau.com">accessibility@licensedatabureau.com</a><br />General: <a href="mailto:contact@licensedatabureau.com">contact@licensedatabureau.com</a></p>
              <p>We aim to respond to accessibility feedback within two (2) business days.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
