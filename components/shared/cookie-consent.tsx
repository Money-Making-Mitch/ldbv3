'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'ldb_cookie_consent'

type ConsentChoice = 'accepted' | 'declined'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored !== 'accepted' && stored !== 'declined') {
        const t = window.setTimeout(() => setVisible(true), 700)
        return () => window.clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // ignore
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="cookie-banner"
    >
      <div className="cookie-inner">
        <div className="cookie-text">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="cookie-icon">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="8" r="1" fill="currentColor"/>
            <circle cx="14" cy="15" r="1.5" fill="currentColor"/>
            <circle cx="9" cy="15.5" r="1" fill="currentColor"/>
          </svg>
          <div>
            <p className="cookie-title">We value your privacy</p>
            <p className="cookie-desc">
              We use essential cookies to make this site work and optional cookies to improve your
              experience. Read our{' '}
              <Link href="/legal/privacy-policy" className="cookie-link">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button
            type="button"
            onClick={() => choose('declined')}
            className="cookie-btn-decline"
            aria-label="Decline optional cookies"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="cookie-btn-accept"
            aria-label="Accept cookies"
            autoFocus
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose('declined')}
            className="cookie-btn-close"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
