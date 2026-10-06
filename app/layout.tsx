import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Bricolage_Grotesque, Roboto_Mono } from 'next/font/google';
import Script from 'next/script';
import { CookieConsent } from '@/components/shared/cookie-consent';
import { generateOrganizationSchema } from '@/lib/schema-markup';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400','500','600','700','800'],
});
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400','600','700','800'],
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['400','500','700'],
});

export const metadata: Metadata = {
  title: 'License & Data Bureau — Operational Data Licensing',
  description: 'LDB qualifies, packages, and licenses your operational records to AI companies. No technical staff required.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${bricolage.variable} ${robotoMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
      </head>
      <body>
        {children}
        <Script src="/calc.js" strategy="afterInteractive" />
        <CookieConsent />
      </body>
    </html>
  );
}
