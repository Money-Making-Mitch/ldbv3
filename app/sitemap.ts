import { MetadataRoute } from 'next'

const BASE = 'https://licensedatabureau.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const legalSlugs = ['accessibility', 'disclaimer', 'privacy-policy', 'terms-of-service']

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...legalSlugs.map((slug) => ({
      url: `${BASE}/legal/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
