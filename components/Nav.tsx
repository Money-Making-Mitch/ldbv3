import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="prsp-nav" aria-label="Main navigation">
      <div className="prsp-nav-inner">
        <a href="/" className="prsp-nav-brand" aria-label="License & Data Bureau home">
          <Image
            src="/ldb-logo.png"
            alt="License & Data Bureau"
            width={210}
            height={46}
            style={{ objectFit: "contain" }}
            priority
          />
        </a>

        <div className="prsp-nav-links" role="list">
          <a href="#ledger" className="prsp-nav-link" role="listitem">Ledger</a>
          <a href="#protocol" className="prsp-nav-link" role="listitem">Protocol</a>
          <a href="#governance" className="prsp-nav-link" role="listitem">Governance</a>
          <a href="#terminal" className="prsp-nav-cta" role="listitem">
            Apply for Valuation
          </a>
        </div>
      </div>
    </nav>
  );
}
