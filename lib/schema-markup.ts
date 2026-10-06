const SITE_URL = 'https://licensedatabureau.com'
const ORG_NAME = 'License & Data Bureau'
const ORG_EMAIL = 'contact@licensedatabureau.com'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: 'LDB',
    url: SITE_URL,
    email: ORG_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    description:
      'License & Data Bureau qualifies, packages, and licenses operational data from mid-market businesses to AI companies and research institutions. Data valuation, corpus preparation, buyer matching, and transaction management. Austin, TX.',
    slogan: 'Your operational data has a second life. We find the buyer.',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
    ],
    knowsAbout: [
      'AI Training Data Licensing',
      'Operational Data Monetization',
      'Data Corpus Qualification',
      'Data Licensing Agreements',
      'Machine Learning Data',
      'Business Data Brokerage',
      'Data Valuation',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: ORG_EMAIL,
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
